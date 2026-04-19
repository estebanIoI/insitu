const AppError = require('@utils/AppError');
const MESSAGES = require('@constants/messages');
const { hasGlobalRole } = require('@middlewares/auth.middleware');
const { prisma } = require('@config/prisma');

class CfgTService {
	constructor(repository) {
		this.repository = repository;
	}

	async createFull({ tipo_id, tipo_form_id, fecha_inicio, fecha_fin, es_cmt_gen, es_cmt_gen_oblig, es_activo, roles = [], genera_autoeval = false, autoeval_tipo_form_id = null, autoeval_rol_mix_ids = null }) {
		if (!tipo_id || !tipo_form_id || !fecha_inicio || !fecha_fin) {
			throw new AppError(MESSAGES.GENERAL.VALIDATION.MISSING_FIELDS, 400);
		}
		if (!roles || roles.length === 0) {
			throw new AppError('Debe asignar al menos un rol', 400);
		}

		// 1. Crear cfg_t principal (evaluación)
		const cfgEval = await prisma.cfg_t.create({
			data: {
				tipo_id,
				tipo_form_id,
				fecha_inicio: new Date(fecha_inicio),
				fecha_fin: new Date(fecha_fin),
				es_cmt_gen: es_cmt_gen ?? true,
				es_cmt_gen_oblig: es_cmt_gen_oblig ?? false,
				es_activo: es_activo ?? true,
			},
		});

		// 2. Crear roles para la evaluación
		if (roles.length > 0) {
			await prisma.cfg_t_rol.createMany({
				data: roles.map(r => ({ cfg_t_id: cfgEval.id, rol_mix_id: r.rol_mix_id })),
				skipDuplicates: true,
			});
		}

		// 3. Crear autoevaluación si aplica
		let cfgAutoeval = null;
		if (genera_autoeval && autoeval_tipo_form_id) {
			cfgAutoeval = await prisma.cfg_t.create({
				data: {
					tipo_id,
					tipo_form_id: autoeval_tipo_form_id,
					fecha_inicio: new Date(fecha_inicio),
					fecha_fin: new Date(fecha_fin),
					es_cmt_gen: es_cmt_gen ?? true,
					es_cmt_gen_oblig: es_cmt_gen_oblig ?? false,
					es_activo: es_activo ?? true,
				},
			});

			const autoevalRolIds = Array.isArray(autoeval_rol_mix_ids) && autoeval_rol_mix_ids.length > 0
				? autoeval_rol_mix_ids
				: roles.map(r => r.rol_mix_id);

			await prisma.cfg_t_rol.createMany({
				data: autoevalRolIds.map(rolMixId => ({ cfg_t_id: cfgAutoeval.id, rol_mix_id: rolMixId })),
				skipDuplicates: true,
			});
		}

		return {
			cfg_eval: cfgEval,
			cfg_autoeval: cfgAutoeval,
			relation: null,
			scope_count: 0,
		};
	}

	getAspectosEscalas(cfgTId) {
		return this.repository.findAspectosEscalasByCfgTId(cfgTId);
	}

	getCfgAAndCfgE(cfgTId) {
		if (!cfgTId) {
			return this.repository.findAllCfgAAndCfgE();
		}
		return this.repository.findCfgAAndCfgEByCfgTId(cfgTId);
	}

	getCfgTList(user, search, sort) {
		const userAppRoleIds = user?.rolesAppIds || [];
		const userAuthRoleIds = user?.rolesAuthIds || [];
		const isAdmin = hasGlobalRole(user);
		const authRoleIdsSet = new Set((userAuthRoleIds || []).map(String));
		const isDocente = authRoleIdsSet.has('2');
		const isEstudiante = authRoleIdsSet.has('1');
		return this.repository.findCfgTListByUserRoles(userAppRoleIds, userAuthRoleIds, isAdmin, isDocente, isEstudiante, search, sort);
	}

	getRolesByCfgT(cfgTId) {
		return this.repository.findRolesByCfgTId(cfgTId);
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

	async getEvaluacionesByCfgT(cfgTId, user) {
		if (!user) throw new AppError(MESSAGES.GENERAL.AUTHORIZATION.UNAUTHORIZED, 401);
		if (!cfgTId) throw new AppError(MESSAGES.GENERAL.VALIDATION.MISSING_FIELDS, 400);

		const currentUsername = user?.username;
		if (!currentUsername) throw new AppError(MESSAGES.GENERAL.VALIDATION.INVALID_REQUEST, 400);

		const { isDocente, isEstudiante } = this.getRoleFlags(user);
		if (!isDocente && !isEstudiante)
			throw new AppError(MESSAGES.GENERAL.AUTHORIZATION.FORBIDDEN, 403);

		return this.repository.findEvaluacionesByCfgTAndUser(cfgTId, currentUsername, { isDocente, isEstudiante });
	}
}

module.exports = CfgTService;
