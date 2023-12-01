'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'otp', {
      type: Sequelize.STRING,
    });

    await queryInterface.addColumn('Users', 'otpGeneratedAt', {
      type: Sequelize.DATE,
    });

    await queryInterface.addColumn('Users', 'otpGenerationCount', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });

    await queryInterface.addColumn('Users', 'loginAttempts', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });

    await queryInterface.addColumn('Users', 'blockedUntil', {
      type: Sequelize.DATE,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'otp');
    await queryInterface.removeColumn('Users', 'otpGeneratedAt');
    await queryInterface.removeColumn('Users', 'otpGenerationCount');
    await queryInterface.removeColumn('Users', 'loginAttempts');
    await queryInterface.removeColumn('Users', 'blockedUntil');
  }
};
