'use strict';

module.exports = {

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Food", "calories");
  }
};
