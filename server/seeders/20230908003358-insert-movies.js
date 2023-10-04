'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Movies', [
      {
        title: "Daredevil",
        slug: "daredevil",
        synopsis: "Matt Murdock manages to overcome the challenges that he faces due to him being blind since childhood and fights criminals as a lawyer and Daredevil.",
        trailerUrl: "http://youtu.be/jAy6NJ_D5vU",
        imgUrl: "https://www.themoviedb.org/t/p/original/jYU7cj7ETOV3o7Bfk6cweAAbnq1.jpg",
        rating: 9.0,
        genreId: 1,
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Don't Look Up",
        slug: "dont-look-up",
        synopsis: "Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth.",
        trailerUrl: "http://youtu.be/RbIxYm3mKzI",
        imgUrl: "https://www.themoviedb.org/t/p/original/w4mdpbqx0NqsgNKZ170U0QDcyl3.jpg",
        rating: 8.1,
        genreId: 4,
        authorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
    return queryInterface.bulkDelete('Movies', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
