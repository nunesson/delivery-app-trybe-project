'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salesProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      saleId: {
        type: Sequelize.STRING
      },
      productId: {
        type: Sequelize.STRING
      },
      quantily: {
        type: Sequelize.NUMBER
      },
      
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('salesProducts');
  }
};