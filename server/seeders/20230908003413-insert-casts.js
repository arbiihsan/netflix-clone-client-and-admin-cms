'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Casts', [
      {
        movieId: 1,
        name: "Charlie Cox",
        profilePict: "https://flxt.tmsimg.com/assets/318295_v9_bb.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 1,
        name: "Deborah Ann",
        profilePict: "https://flxt.tmsimg.com/assets/519636_v9_bb.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 1,
        name: "Vincent D'Onofrio",
        profilePict: "https://flxt.tmsimg.com/assets/64804_v9_bb.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 2,
        name: "Jennifer Lawrence",
        profilePict: "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 2,
        name: "Leonardo DiCaprio",
        profilePict: "https://flxt.tmsimg.com/assets/435_v9_bc.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 2,
        name: "Jonah Hill",
        profilePict: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Jonah_Hill-4939_%28cropped%29_%28cropped%29.jpg/1200px-Jonah_Hill-4939_%28cropped%29_%28cropped%29.jpg",
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

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Casts', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
