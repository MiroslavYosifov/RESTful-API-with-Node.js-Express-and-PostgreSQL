'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
        'Users', 
        [
          {
            firstName: 'John',
            lastName: 'Doe',
            email: 'joe@abv.bg',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            firstName: 'Pesho',
            lastName: 'Pesho',
            email: 'pesho@abv.bg',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            firstName: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan@abv.bg',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ], 
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
