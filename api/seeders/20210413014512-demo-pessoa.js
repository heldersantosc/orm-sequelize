"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome: "Helder Santos",
          ativo: true,
          email: "heldersantos.c@gmail.com",
          role: "Software Engineer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Pessoas", null, {});
  },
};
