const products = (sequelize, DataTypes) => {
    const products = sequelize.define(
      'products',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING
        },
        price: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: true,
        },
        urlImage: {
          allowNull: false,
          type: DataTypes.TEXT,
        },
    },
    {

        tableName: 'salesProducts',
        underscored: true,
        timestamps: false,
      });
      
    return products;
  };
  
  
  module.exports = products;