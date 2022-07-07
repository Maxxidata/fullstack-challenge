module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "ProfessionalType",
      [
        {
          description: "Professor",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Médico",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    const types = await queryInterface.sequelize.query(
      `SELECT id from "ProfessionalType";`
    );

    const typesRows = types[0];

    return await queryInterface.bulkInsert(
      "Professional",
      [
        {
          name: "Pedro",
          phone: "(45) 3442-4552",
          email: "pedro@email.com",
          professionalTypeId: typesRows[0].id,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "João",
          phone: "(45) 9999-9098",
          email: "joao@email.com",
          professionalTypeId: typesRows[1].id,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("ProfessionalType", null, {});
    await queryInterface.bulkDelete("Professional", null, {});
  },
};
