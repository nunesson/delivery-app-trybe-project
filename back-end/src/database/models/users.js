const users = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(32)
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING(20)
      },
    },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    });
    
  return users;
};


module.exports = users;