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
        type: DataTypes.STRING,
      },
      sellerId: {
        type: DataTypes.STRING,
      },
      totalPrice: {
        type: DataTypes.STRING,
      },
      deliveryAddress: {
        type: DataTypes.STRING
      },
      deliveryNumber: {
        type: DataTypes.STRING
      },
      saleDate: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.STRING
      },
    },
    {
      tableName: 'sales',
      underscored: true,
      timestamps: false,
    });
    
  return sales;
};


module.exports = sales;