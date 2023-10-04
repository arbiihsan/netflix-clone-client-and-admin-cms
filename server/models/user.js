'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Movie, { foreignKey: "authorId" });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Email cannot be empty",
        },
        notEmpty: {
          msg: "Email cannot be empty",
        },
        isEmail: {
          msg: "Email must be in email format",
        },
      },
      unique: {
        msg: "Email must be unique",
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password cannot be empty",
        },
        notEmpty: {
          msg: "Password cannot be empty",
        },
        len: {
          args: [5],
          msg: "Minimum password length is 5 characters",
        },
      },
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) => {
    user.password = hashPassword(user.password)
  })

  return User;
};