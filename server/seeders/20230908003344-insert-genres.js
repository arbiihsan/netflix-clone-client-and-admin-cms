'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Genres', [
      {
        name: 'Action',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Genres', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
