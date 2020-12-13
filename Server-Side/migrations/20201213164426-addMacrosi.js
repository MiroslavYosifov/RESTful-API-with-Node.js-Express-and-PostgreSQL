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
        "protein",
        {
          type: Sequelize.INTEGER
        }
      ),
      await queryInterface.addColumn(
        "Food",
        "fat",
        {
          type: Sequelize.INTEGER
        }
      ),
      await queryInterface.addColumn(
        "Food",
        "carbohydrate",
        {
          type: Sequelize.INTEGER
        }
      ),
    ]);
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
