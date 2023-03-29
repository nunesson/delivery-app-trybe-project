'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      urlImage: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'url_image',
        
      },
      quantily: {
        type: Sequelize.NUMBER
      },
      
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('products');
  }
};