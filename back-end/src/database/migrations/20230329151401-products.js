module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(100),
      },
      price: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: false,
      },
      urlImage: {
        allowNull: false,
        type: Sequelize.STRING(200),
        defaultValue: '',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('products');
  },
};