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
        "availability",
        {
          type: Sequelize.JSON(Sequelize.DECIMAL)
        }
      ),
      await queryInterface.addColumn(
        "Food",
        "price",
        {
          type: Sequelize.DECIMAL
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
