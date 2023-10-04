'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cast.belongsTo(models.Movie, { foreignKey: "movieId" });
    }
  }
  Cast.init({
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Movie Id cannot be empty",
        },
        notEmpty: {
          msg: "Movie Id cannot be empty",
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Cast Name cannot be empty",
        },
        notEmpty: {
          msg: "Cast Name cannot be empty",
        },
      },
    },
    profilePict: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Cast',
  });
  return Cast;
};