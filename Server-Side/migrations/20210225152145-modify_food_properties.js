'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    Promise.all([
    await queryInterface.addColumn(
      "Food",
      "kind",
      {
        type: Sequelize.STRING
      }
    ),
    await queryInterface.addColumn(
      "Food",
      "protein",
      {
        type: Sequelize.DECIMAL
      }
    ),
    await queryInterface.addColumn(
      "Food",
      "fat",
      {
        type: Sequelize.DECIMAL
      }
    ),
    await queryInterface.addColumn(
      "Food",
      "carbohydrate",
      {
        type: Sequelize.DECIMAL
      }
    ),
    await queryInterface.addColumn(
      "Food",
      "imgUrl",
      {
        type: Sequelize.STRING
      }
    ),
    await queryInterface.addColumn(
      "Food",
      "calories",
      {
        type: Sequelize.DECIMAL
      }
    )]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};