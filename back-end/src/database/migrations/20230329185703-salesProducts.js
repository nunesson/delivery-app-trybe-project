module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      saleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales_products');
  }
};
