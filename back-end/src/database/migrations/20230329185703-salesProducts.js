module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      saleId: {
        field: 'sale_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { 
          model: 'sales',
          key: 'id',
         },
      },
      productId: {
        field: 'product_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { 
          model: 'products',
          key: 'id',
         },
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales_products');
  },
};
