const { userPrisma, prisma } = require('@config/prisma');
const { Prisma } = require('@prisma/client');

class FilterRepository {
  /**
   * Construye las condiciones WHERE basadas en los filtros
   */
  _buildWhereConditions(filters = {}) {
    const conditions = ['1=1']; // Siempre verdadero como base
    const params = [];

    if (filters.sede) {
      conditions.push(`NOMBRE_SEDE = ?`);
      params.push(filters.sede);
    }
    if (filters.periodo) {
      conditions.push(`PERIODO = ?`);
      params.push(filters.periodo);
    }
    if (filters.programa) {
      conditions.push(`NOM_PROGRAMA = ?`);
      params.push(filters.programa);
    }
    if (filters.semestre) {
      conditions.push(`SEMESTRE = ?`);
      params.push(filters.semestre);
    }

    return { conditions, params };
  }

  /**
   * Obtiene valores únicos de sede de la tabla vista_academica_insitus
   */
  async getUniqueSedes() {
    const result = await userPrisma.$queryRaw`
      SELECT DISTINCT NOMBRE_SEDE 
      FROM vista_academica_insitus 
      WHERE NOMBRE_SEDE IS NOT NULL
      ORDER BY NOMBRE_SEDE
    `;
    return result;
  }

  /**
   * Obtiene valores únicos de periodo filtrados por sede (opcional)
   */
  async getUniquePeriodos(filters = {}) {
    const { conditions, params } = this._buildWhereConditions({ sede: filters.sede });
    
    const query = `
      SELECT DISTINCT PERIODO 
      FROM vista_academica_insitus 
      WHERE ${conditions.join(' AND ')}
        AND PERIODO IS NOT NULL
      ORDER BY PERIODO DESC
    `;

    const result = await userPrisma.$queryRawUnsafe(query, ...params);
    return result;
  }

  /**
   * Obtiene valores únicos de programa filtrados por sede y periodo (opcionales)
   */
  async getUniqueProgramas(filters = {}) {
    const { conditions, params } = this._buildWhereConditions({
      sede: filters.sede,
      periodo: filters.periodo
    });
    
    const query = `
      SELECT DISTINCT NOM_PROGRAMA 
      FROM vista_academica_insitus 
      WHERE ${conditions.join(' AND ')}
        AND NOM_PROGRAMA IS NOT NULL
      ORDER BY NOM_PROGRAMA
    `;

    const result = await userPrisma.$queryRawUnsafe(query, ...params);
    return result;
  }

  /**
   * Obtiene valores únicos de semestre filtrados por sede, periodo y programa (opcionales)
   */
  async getUniqueSemestres(filters = {}) {
    const { conditions, params } = this._buildWhereConditions({
      sede: filters.sede,
      periodo: filters.periodo,
      programa: filters.programa
    });
    
    const query = `
      SELECT DISTINCT SEMESTRE 
      FROM vista_academica_insitus 
      WHERE ${conditions.join(' AND ')}
        AND SEMESTRE IS NOT NULL
      ORDER BY CASE UPPER(TRIM(SEMESTRE))
        WHEN 'PRIMER SEMESTRE' THEN 1
        WHEN 'SEGUNDO SEMESTRE' THEN 2
        WHEN 'TERCER SEMESTRE' THEN 3
        WHEN 'CUARTO SEMESTRE' THEN 4
        WHEN 'QUINTO SEMESTRE' THEN 5
        WHEN 'SEXTO SEMESTRE' THEN 6
        WHEN 'SEPTIMO SEMESTRE' THEN 7
        WHEN 'OCTAVO SEMESTRE' THEN 8
        WHEN 'NOVENO SEMESTRE' THEN 9
        WHEN 'DECIMO SEMESTRE' THEN 10
        ELSE 999
      END,
      SEMESTRE
    `;

    const result = await userPrisma.$queryRawUnsafe(query, ...params);
    return result;
  }

  /**
   * Obtiene valores únicos de grupo filtrados por sede, periodo, programa y semestre (opcionales)
   */
  async getUniqueGrupos(filters = {}) {
    const { conditions, params } = this._buildWhereConditions({
      sede: filters.sede,
      periodo: filters.periodo,
      programa: filters.programa,
      semestre: filters.semestre
    });
    
    const query = `
      SELECT DISTINCT GRUPO 
      FROM vista_academica_insitus 
      WHERE ${conditions.join(' AND ')}
        AND GRUPO IS NOT NULL
      ORDER BY GRUPO
    `;

    const result = await userPrisma.$queryRawUnsafe(query, ...params);
    return result;
  }

  /**
   * Obtiene todos los valores únicos de los filtros sin filtrado
   */
  async getAllFilters() {
    const [sedes, periodos, programas, semestres, grupos] = await Promise.all([
      this.getUniqueSedes(),
      this.getUniquePeriodos(),
      this.getUniqueProgramas(),
      this.getUniqueSemestres(),
      this.getUniqueGrupos(),
    ]);

    return {
      sedes,
      periodos,
      programas,
      semestres,
      grupos,
    };
  }

  /**
   * Obtiene todos los filtros para el modal de configuración.
   * Sedes/periodos/etc. vienen de la BD externa como strings (igual que getAllFilters).
   * El frontend convierte los strings a {id: index+1, nombre} via toFilterOptions.
   * Roles vienen de rol_mix en la BD local con sus IDs reales.
   */
  async getAllFiltersLocal() {
    const [sedes, periodos, programas, semestres, grupos, roles] = await Promise.all([
      this.getUniqueSedes(),
      this.getUniquePeriodos(),
      this.getUniqueProgramas(),
      this.getUniqueSemestres(),
      this.getUniqueGrupos(),
      prisma.rol_mix.findMany({
        select: { id: true, nombre: true, origen: true, rol_origen_id: true },
        orderBy: { id: 'asc' },
      }),
    ]);

    return {
      sedes: sedes.map((s) => s.NOMBRE_SEDE),
      periodos: periodos.map((p) => p.PERIODO),
      programas: programas.map((p) => p.NOM_PROGRAMA),
      semestres: semestres.map((s) => s.SEMESTRE),
      grupos: grupos.map((g) => g.GRUPO),
      roles,
    };
  }
}

module.exports = FilterRepository;
