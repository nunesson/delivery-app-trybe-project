const salesProducts = (sequelize, DataTypes) => {
    const salesProducts = sequelize.define(
      'salesProducts',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        saleID: {
          allowNull: false,
          type: DataTypes.STRING
        },
        productId: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: true,
        },
        quantily: {
          allowNull: false,
          type: DataTypes.STRING
        },
        
      },
      {
        tableName: 'salesProducts',
        underscored: true,
        timestamps: false,
      });
      
    return salesProducts;
  };
  
  
  module.exports = salesProducts;