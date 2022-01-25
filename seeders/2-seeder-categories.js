'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories",
      [{
          categoryName: "design"
        },
        {
          categoryName: "photography"
        },
        {
          categoryName: "development"
        },
        {
          categoryName: "marketing"
        },
        {
          categoryName: "business"
        },
        {
          categoryName: "lifestyle"
        },
        {
          categoryName: "music"
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