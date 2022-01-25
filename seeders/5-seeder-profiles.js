'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Profiles",
      [{
          userId: 1,
          image: "https://res.cloudinary.com/dry2yqm3h/image/upload/v1642993217/image/seeEvents/no-profile-pic_dlydjj.png"
        },
        {
          userId: 2,
          image: "https://res.cloudinary.com/dry2yqm3h/raw/upload/v1642992975/image/1642992972717%20-%20cat.jpg"
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