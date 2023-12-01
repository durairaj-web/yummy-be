'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    otp: DataTypes.STRING,
    otpGeneratedAt: DataTypes.DATE,
    otpGenerationCount: DataTypes.INTEGER,
    loginAttempts: DataTypes.INTEGER,
    blockedUntil: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};