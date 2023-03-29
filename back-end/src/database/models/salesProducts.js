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

	salesProducts.associate = (models) => {
		salesProducts.belongsToMany(models.sales, { foreignKey: 'saleId' });
		salesProducts.belongsToMany(models.products, { foreignKey: 'productId' });
	};

	return salesProducts;
};

module.exports = salesProducts;