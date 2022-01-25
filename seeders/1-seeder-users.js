'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users",
      [{
          firstName: "Juan",
          lastName: "Rahmadhika",
          email: "admin@email.com",
          password: "$2b$10$6wjhnuK/.LoeIN3kZWqXb.SFAIKAbW3TmtkunFx4GeyfzusebQfv6",
        },
        {
          firstName: "Zhafran",
          lastName: "Saloom",
          email: "admin2@gmail.com",
          password: "$2b$10$6wjhnuK/.LoeIN3kZWqXb.SFAIKAbW3TmtkunFx4GeyfzusebQfv6",
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