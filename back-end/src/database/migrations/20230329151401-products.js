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
        type: Sequelize.STRING,
      },
      urlImage: {
        type: Sequelize.STRING,
        field: 'url_image',
      },
      quantity: {
        type: Sequelize.NUMBER,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('products');
  },
};