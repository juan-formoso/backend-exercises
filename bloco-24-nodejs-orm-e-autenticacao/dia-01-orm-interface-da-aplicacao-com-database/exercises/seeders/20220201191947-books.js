'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books',
      [{
        title: 'O pequeno príncipe',
        author: 'Antoine de Saint-Exupéry',
        pageQuantity: '200',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O Senhor dos Anéis' ,
        author: 'J.R.R. Tolkien',
        pageQuantity: '1000',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O Hobbit',
        author: 'J.R.R. Tolkien',
        pageQuantity: '300',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }]
    );
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
