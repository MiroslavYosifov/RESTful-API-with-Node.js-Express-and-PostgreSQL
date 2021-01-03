'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "Food",
      "imgUrl",
      {
        type: Sequelize.DataTypes.STRING
      }
    );
  },
};
