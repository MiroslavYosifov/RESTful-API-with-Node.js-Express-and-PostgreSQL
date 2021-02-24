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
      "FoodTwo",
      "kind",
      {
        type: Sequelize.STRING
      }
    ),
    await queryInterface.addColumn(
      "FoodTwo",
      "protein",
      {
        type: Sequelize.INTEGER
      }
    ),
    await queryInterface.addColumn(
      "FoodTwo",
      "fat",
      {
        type: Sequelize.INTEGER
      }
    ),
    await queryInterface.addColumn(
      "FoodTwo",
      "carbohydrate",
      {
        type: Sequelize.INTEGER
      }
    ),
    await queryInterface.addColumn(
      "FoodTwo",
      "calories",
      {
        type: Sequelize.INTEGER
      }
    ),
    await queryInterface.addColumn(
      "FoodTwo",
      "imgUrl",
      {
        type: Sequelize.STRING
      }
    ),
      await queryInterface.addColumn(
        "FoodTwo",
        "price",
        {
          type: Sequelize.INTEGER
        }
      ),
     
     
    ]);
  },

  down: async (queryInterface, Sequelize) => {
 
     await queryInterface.dropTable('FoodTwo');
  }
};
