'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "Food",
      "calories",
      {
        type: Sequelize.DataTypes.INTEGER
      }
    );
  },

};
