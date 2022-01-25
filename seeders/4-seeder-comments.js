'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Comments",
      [{
          eventId: 4,
          userId: 2,
          comment: "Waw keren"
        },
        {
          eventId: 4,
          userId: 1,
          comment: "Iri bilang boss"
        },
        {
          eventId: 8,
          userId: 1,
          comment: "Impressive"
        },
        {
          eventId: 8,
          userId: 2,
          comment: "Enjoy your life"
        },
        {
          eventId: 8,
          userId: 2,
          comment: "I am handsome"
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