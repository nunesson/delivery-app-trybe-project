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
          type: DataTypes.STRING(100),
          unique: true,
        },
        price: {
          allowNull: false,
          type: DataTypes.DECIMAL(4,2),
          unique: true,
        },
        urlImage: {
          allowNull: false,
          type: DataTypes.STRING(200),
          defaultValue: '',
        },
    },
    {

        tableName: 'products',
        underscored: true,
        timestamps: false,
      });
      
    return products;
  };
  
  
  module.exports = products;