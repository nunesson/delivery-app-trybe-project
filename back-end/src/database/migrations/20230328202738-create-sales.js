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
        type: Sequelize.STRING,
      },
      sellerId: {
        type: Sequelize.STRING,
      },
      totalPrice: {
        type: Sequelize.STRING,
      },
      deliveryAddress: {
        type: Sequelize.STRING,
      },
      deliveryNumber: {
        type: Sequelize.STRING,
      },
      saleDate: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('sales');
  },
};