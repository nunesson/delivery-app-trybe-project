module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        field: 'user_id',
        type: Sequelize.STRING,
        allowNull: false,
      },
      sellerId: {
        field: 'seller_id',
        type: Sequelize.STRING,
        allowNull: false,
      },
      totalPrice: {
        field: 'total_price',
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryAddress: {
        field: 'delivery_address',
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryNumber: {
        field: 'delivery_number',
        type: Sequelize.STRING,
        allowNull: false,
      },
      saleDate: {
        field: 'sale_date',
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('sales');
  },
};