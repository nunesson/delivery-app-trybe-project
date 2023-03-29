const salesProducts = (sequelize, DataTypes) => {
    const salesProducts = sequelize.define(
      'sales_products',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        saleId: {
          allowNull: false,
          type: DataTypes.INTEGER
        },
        productId: {
          allowNull: false,
          type: DataTypes.INTEGER,
        },
        quantity: {
          allowNull: false,
          type: DataTypes.NUMBER
        },
        
      },
      {
        tableName: 'sales_products',
        underscored: true,
        timestamps: false,
      });
      
    return salesProducts;
  };
  
  
  module.exports = salesProducts;