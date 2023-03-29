const salesProducts = (sequelize, DataTypes) => {
    const salesProducts = sequelize.define(
        'salesProducts',
        {
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
                type: DataTypes.INTEGER,
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