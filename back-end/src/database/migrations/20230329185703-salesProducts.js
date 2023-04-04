module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      saleId: {
        field: 'sale_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        reference: { 
          model: 'sales',
          key: 'id',
         },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE',
      },
      productId: {
        field: 'product_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        reference: { 
          model: 'products',
          key: 'id',
         },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
