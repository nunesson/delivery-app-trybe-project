const sales = (sequelize, DataTypes) => {
  const sales = sequelize.define(
    'sales',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      sellerId: {
        type: DataTypes.INTEGER,
      },
      totalPrice: {
        type: DataTypes.DECIMAL(9, 2),
      },
      deliveryAddress: {
        type: DataTypes.STRING(100),
      },
      deliveryNumber: {
        type: DataTypes.STRING(50),
      },
      saleDate: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.STRING(50),
      },
    },
    {
      tableName: 'sales',
      underscored: true,
      timestamps: false,
    },
  );

  sales.associate = (models) => {
    sales.belongsTo(models.users, { foreignKey: 'userId' });
    sales.belongsTo(models.users, { foreignKey: 'sellerId' });
  };

  return sales;
};

module.exports = sales;