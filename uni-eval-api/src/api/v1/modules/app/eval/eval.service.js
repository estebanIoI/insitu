const AppError = require('@utils/AppError');
const MESSAGES = require('@constants/messages');
const { prisma, userPrisma } = require('@config/prisma');

const EvalRepository = require('./eval.repository');

// Reuse user module to fetch materias
const UserRepository = require('../../auth/user/user.repository');
const UserService = require('../../auth/user/user.service');

class EvalService {
	constructor(repository = new EvalRepository()) {
		this.repository = repository;
		this.userService = new UserService(new UserRepository());
	}

	getRoleFlags(user) {
		const { roles = [], rolesAuth = [], rolesApp = [] } = user || {};
		const all = new Set([...(roles || []), ...(rolesAuth || []), ...(rolesApp || [])].filter(Boolean));

		const ROLES_ESTUDIANTE = new Set(['Estudiante']);
		const ROLES_DOCENTE = new Set([
			'Docente',
			'docente_planta',
			'docente_catedra',
			'docente_planta_tc',
			'docente_planta_mt',
			'docente_planta_tiempo_completo',
			'docente_planta_medio_tiempo'
		]);

		const isDocente = [...all].some(r => ROLES_DOCENTE.has(r));
		const isEstudiante = [...all].some(r => ROLES_ESTUDIANTE.has(r));
		return { isDocente, isEstudiante };
	}

	async enrichWithNames(results) {
		if (!results || results.length === 0) return results;

		// Collect unique docente-materia pairs (for tipos 1 y 2)
		const docentePairs = results
			.filter(r => r.docente && r.codigo_materia)
			.map(r => ({ docente: r.docente, codigo: parseInt(r.codigo_materia) }));

		// Collect unique estudiante-materia pairs (for tipos 3 y 4)
		const estudiantePairs = results
			.filter(r => r.estudiante && r.codigo_materia && !r.docente)
			.map(r => ({ estudiante: r.estudiante, codigo: parseInt(r.codigo_materia) }));

		if (docentePairs.length === 0 && estudiantePairs.length === 0) return results;

		// Build OR conditions for both docente and estudiante lookups
		const orConditions = [
			...docentePairs.map(p => ({
				ID_DOCENTE: p.docente,
				COD_ASIGNATURA: p.codigo
			})),
			...estudiantePairs.map(p => ({
				ID_ESTUDIANTE: p.estudiante,
				COD_ASIGNATURA: p.codigo
			}))
		];

		// Collect unique COD_ASIGNATURA values for the raw query
		const allCodigos = [...new Set([
			...docentePairs.map(p => p.codigo),
			...estudiantePairs.map(p => p.codigo),
		])];
		const allDocentes = [...new Set(docentePairs.map(p => p.docente))];
		const allEstudiantes = [...new Set(estudiantePairs.map(p => p.estudiante))];

		// Use SELECT * via raw query to get ALL view columns (including any unmapped name fields)
		let vistaData = [];
		if (allCodigos.length > 0) {
			const codigosStr = allCodigos.join(',');
			const docentesStr = allDocentes.length ? `'${allDocentes.join("','")}'` : null;
			const estudiantesStr = allEstudiantes.length ? `'${allEstudiantes.join("','")}'` : null;

			const whereDocente = docentesStr ? `(ID_DOCENTE IN (${docentesStr}) AND COD_ASIGNATURA IN (${codigosStr}))` : 'FALSE';
			const whereEstudiante = estudiantesStr ? `(ID_ESTUDIANTE IN (${estudiantesStr}) AND COD_ASIGNATURA IN (${codigosStr}))` : 'FALSE';

			vistaData = await userPrisma.$queryRawUnsafe(
				`SELECT * FROM vista_academica_insitus WHERE ${whereDocente} OR ${whereEstudiante}`
			);
		}

		const resolveNombre = (v) => {
			const candidates = [v?.ASIGNATURA, v?.NOMBRE_ASIGNATURA, v?.NOM_ASIGNATURA, v?.NOMBRE_MATERIA, v?.NOM_MATERIA, v?.MATERIA, v?.ABREVIATURA_CURSO];
			return candidates.find(c => c && String(c).trim().length > 0) || null;
		};

		// Create separate lookup maps for docente and estudiante
		const lookupMapDocente = new Map();
		const lookupMapEstudiante = new Map();

		vistaData.forEach(v => {
			if (v.ID_DOCENTE) {
				const key = `${v.ID_DOCENTE}_${v.COD_ASIGNATURA}`;
				lookupMapDocente.set(key, {
					nombre_docente: v.DOCENTE,
					nombre_materia: resolveNombre(v)
				});
			}
			if (v.ID_ESTUDIANTE) {
				const key = `${v.ID_ESTUDIANTE}_${v.COD_ASIGNATURA}`;
				lookupMapEstudiante.set(key, {
					nombre_docente: v.DOCENTE,
					nombre_materia: resolveNombre(v)
				});
			}
		});

		// Enrich results with names
		return results.map(r => {
			let names = null;
			
			// Try docente lookup first
			if (r.docente && r.codigo_materia) {
				const key = `${r.docente}_${r.codigo_materia}`;
				names = lookupMapDocente.get(key);
			}
			
			// If no docente match, try estudiante lookup (for self-evaluations)
			if (!names && r.estudiante && r.codigo_materia) {
				const key = `${r.estudiante}_${r.codigo_materia}`;
				names = lookupMapEstudiante.get(key);
			}
			
			return {
				...r,
				nombre_docente: names?.nombre_docente || null,
				nombre_materia: names?.nombre_materia || null
			};
		});
	}

	async generateEvaluations(input, user) {
		const configId = Number(input?.configId);
		if (!user) throw new AppError(MESSAGES.GENERAL.AUTHORIZATION.UNAUTHORIZED, 401);
		if (!configId) throw new AppError(MESSAGES.GENERAL.VALIDATION.MISSING_FIELDS, 400);

		const username = user.username; // comes from auth.middleware
		if (!username) throw new AppError(MESSAGES.GENERAL.VALIDATION.INVALID_REQUEST, 400);

		const cfg = await this.repository.getConfigWithType(configId);
		if (!cfg) throw new AppError(MESSAGES.GENERAL.NOT_FOUND.NOT_FOUND, 404);

		const tipoFormId = cfg?.tipo_form?.id;
		const { isDocente, isEstudiante } = this.getRoleFlags(user);

		// Verificar si ya existen evaluaciones generadas
		const hasEvals = await this.repository.hasExistingEvaluations(configId, username, isEstudiante);
		if (hasEvals) {
			throw new AppError('Las evaluaciones ya fueron generadas para esta configuración', 409);
		}

		// TIPO 1: EVALUACIÓN - Estudiante evalúa a docente por materia
		if (tipoFormId === 1) {
			if (!isEstudiante) throw new AppError(MESSAGES.GENERAL.AUTHORIZATION.FORBIDDEN, 403);

			// Get materias for the authenticated student
			const estudiante = await this.userService.getMateriasEstudiante(username);
			const materias = estudiante?.materias || [];

			const created = await prisma.$transaction(async (tx) => {
				const results = [];
				for (const m of materias) {
					const payload = {
						id_configuracion: configId,
						estudiante: String(username),
						docente: m?.docente?.documento ? String(m.docente.documento) : null,
						codigo_materia: m?.codigo != null ? String(m.codigo) : null,
						cmt_gen: null,
					};

					const exists = await this.repository.findExisting(payload, tx);
					if (!exists) {
						const row = await this.repository.create(payload, tx);
						results.push({
							id_configuracion: row.id_configuracion,
							estudiante: row.estudiante,
							docente: row.docente,
							codigo_materia: row.codigo_materia
						});
					}
				}
				return results;
			});

			return this.enrichWithNames(created);
		}

		// TIPO 2: ENCUESTA - Opinión general sin materia
		if (tipoFormId === 2) {
			if (!isDocente && !isEstudiante)
				throw new AppError(MESSAGES.GENERAL.AUTHORIZATION.FORBIDDEN, 403);

			const singlePayload = {
				id_configuracion: configId,
				estudiante: isEstudiante ? String(username) : null,
				docente: isDocente ? String(username) : null,
				codigo_materia: null,
				cmt_gen: null,
			};

			const created = await prisma.$transaction(async (tx) => {
				const exists = await this.repository.findExisting(singlePayload, tx);
				if (exists) return [];
				const row = await this.repository.create(singlePayload, tx);
				return [{
					id_configuracion: row.id_configuracion,
					estudiante: row.estudiante,
					docente: row.docente,
					codigo_materia: row.codigo_materia
				}];
			});

			return created;
		}

		// TIPO 3: AUTOEVALUACIÓN - Usuario se evalúa a sí mismo (sin materia)
		if (tipoFormId === 3) {
			if (!isDocente && !isEstudiante)
				throw new AppError(MESSAGES.GENERAL.AUTHORIZATION.FORBIDDEN, 403);

			const singlePayload = {
				id_configuracion: configId,
				estudiante: isEstudiante ? String(username) : null,
				docente: isDocente ? String(username) : null,
				codigo_materia: null,
				cmt_gen: null,
			};

			const created = await prisma.$transaction(async (tx) => {
				const exists = await this.repository.findExisting(singlePayload, tx);
				if (exists) return [];
				const row = await this.repository.create(singlePayload, tx);
				return [{
					id_configuracion: row.id_configuracion,
					estudiante: row.estudiante,
					docente: row.docente,
					codigo_materia: row.codigo_materia
				}];
			});

			return created;
		}

		// TIPO 4: AUTOEVALUACIÓN POR MATERIA - Usuario se evalúa por cada materia
		if (tipoFormId === 4) {
			if (!isDocente && !isEstudiante)
				throw new AppError(MESSAGES.GENERAL.AUTHORIZATION.FORBIDDEN, 403);

			let materias = [];

			// Si es estudiante, obtener materias que cursa
			if (isEstudiante) {
				const estudiante = await this.userService.getMateriasEstudiante(username);
				materias = estudiante?.materias || [];
			}
			// Si es docente, obtener materias que imparte
			else if (isDocente) {
				const docente = await this.userService.getMateriasDocente(username);
				materias = docente?.materias || [];
			}

			const created = await prisma.$transaction(async (tx) => {
				const results = [];
				for (const m of materias) {
					const payload = {
						id_configuracion: configId,
						estudiante: isEstudiante ? String(username) : null,
						docente: isDocente ? String(username) : null,
						codigo_materia: m?.codigo != null ? String(m.codigo) : null,
						cmt_gen: null,
					};

					const exists = await this.repository.findExisting(payload, tx);
					if (!exists) {
						const row = await this.repository.create(payload, tx);
						results.push({
							id_configuracion: row.id_configuracion,
							estudiante: row.estudiante,
							docente: row.docente,
							codigo_materia: row.codigo_materia,
							nombre_materia: m?.nombre || null
						});
					}
				}
				return results;
			});

			return created;
		}

		throw new AppError('Tipo de formulario no válido', 400);
	}
}

module.exports = EvalService;

