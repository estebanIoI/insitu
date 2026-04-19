const { userPrisma } = require('@config/prisma'); 

class UserRepository {
  constructor() {
    this.model = userPrisma.vista_academica_insitus;
  }

  findMateriasByEstudiante(ID_ESTUDIANTE) {
    return this.model.findMany({
      where: { ID_ESTUDIANTE },
      orderBy: { PERIODO: 'asc' }
    });
  }

  findMateriasByDocente(ID_DOCENTE) {
    return this.model.findMany({
      where: { ID_DOCENTE },
      orderBy: { PERIODO: 'asc' }
    });
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
