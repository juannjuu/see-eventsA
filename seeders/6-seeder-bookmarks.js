'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Bookmarks",
      [{
          eventId: 5,
          userId: 2,
        },
        {
          eventId: 5,
          userId: 1,
        },
        {
          eventId: 8,
          userId: 1,
        },
        {
          eventId: 8,
          userId: 2,
        },
        {
          eventId: 10,
          userId: 2,
        },
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