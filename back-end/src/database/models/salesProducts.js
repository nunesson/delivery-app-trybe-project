const salesProducts = (sequelize, DataTypes) => {
	const salesProducts = sequelize.define(
		'salesProducts',
		{
			saleId: {
				allowNull: false,
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			productId: {
				allowNull: false,
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			quantity: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
		},
		{
			tableName: 'sales_products',
			underscored: true,
			timestamps: false,
		});

	salesProducts.associate = (models) => {
		models.sales.belongsToMany(models.products, { foreignKey: 'productId', otherKey: 'saleId', 
		  through: salesProducts, as: 'products' });

		models.products.belongsToMany(models.sales, { foreignKey: 'saleId', otherKey: 'productId',
		  through: salesProducts, as: 'sales'});
	};

	return salesProducts;
};

module.exports = salesProducts;