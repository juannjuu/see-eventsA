'use strict';
const {
  hashPassword
} = require('../utils/bcrypt')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users",
      [{
          firstName: "avan",
          lastName: "the love",
          email: "avanthelove@email.com",
          password: hashPassword("avantek"),
        },
        {
          firstName: "tiga",
          lastName: "jeruk",
          email: "tigajeruk@gmail.com",
          password: hashPassword("tigajeruk"),
        }
      ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};