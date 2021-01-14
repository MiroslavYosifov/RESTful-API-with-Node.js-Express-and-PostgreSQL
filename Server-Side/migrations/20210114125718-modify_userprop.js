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
        "Users",
        "firstName",
        {
          type: Sequelize.STRING
        }
      ),
      await queryInterface.addColumn(
        "Users",
        "lastName",
        {
          type: Sequelize.STRING
        }
      ),
      await queryInterface.addColumn(
        "Users",
        "email",
        {
          type: Sequelize.STRING
        }
      ),
      await queryInterface.addColumn(
        "Users",
        "password",
        {
          type: Sequelize.STRING
        }
      ),
      await queryInterface.addColumn(
        "Users",
        "roles",
        {
          type: Sequelize.ARRAY(Sequelize.STRING)
        }
      ),
      await queryInterface.addColumn(
        "Users",
        "comments",
        {
          type: Sequelize.ARRAY(Sequelize.STRING)
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