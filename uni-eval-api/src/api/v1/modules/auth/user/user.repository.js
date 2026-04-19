const { userPrisma } = require('@config/prisma');

class UserRepository {
  constructor() {
    this.model = userPrisma.vista_academica_insitus;
  }

  async findMateriasByEstudiante(ID_ESTUDIANTE) {
    // Use raw query to get ALL columns from the view, including any unmapped name fields
    const rows = await userPrisma.$queryRaw`
      SELECT * FROM vista_academica_insitus
      WHERE ID_ESTUDIANTE = ${ID_ESTUDIANTE}
      ORDER BY PERIODO ASC
    `;
    return rows;
  }

  async findMateriasByDocente(ID_DOCENTE) {
    const rows = await userPrisma.$queryRaw`
      SELECT * FROM vista_academica_insitus
      WHERE ID_DOCENTE = ${ID_DOCENTE}
      ORDER BY PERIODO ASC
    `;
    return rows;
  }

  findMateriasByCodigos(codigos) {
    if (!codigos || codigos.length === 0) return [];

    return this.model.findMany({
      where: {
        COD_ASIGNATURA: { in: codigos }
      },
      orderBy: { PERIODO: 'asc' }
    });
  }
}

module.exports = UserRepository;
