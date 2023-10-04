'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsTo(models.User, { foreignKey: "authorId" });
      Movie.belongsTo(models.Genre, { foreignKey: "genreId" });
      Movie.hasMany(models.Cast, { foreignKey: "movieId" });
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Title cannot be empty",
        },
        notEmpty: {
          msg: "Title cannot be empty",
        },
      },
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Slug cannot be empty",
        },
        notEmpty: {
          msg: "Slug cannot be empty",
        },
      },
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Synopsis cannot be empty",
        },
        notEmpty: {
          msg: "Synopsis cannot be empty",
        },
      },
    },
    trailerUrl: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 1,
          msg: "Minimum rating is 1",
        },
      },
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Genre Id cannot be empty",
        },
        notEmpty: {
          msg: "Genre Id cannot be empty",
        },
      },
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Author Id cannot be empty",
        },
        notEmpty: {
          msg: "Author Id cannot be empty",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};