const salesProducts = (sequelize, DataTypes) => {
	const salesProducts = sequelize.define(
		'salesProducts',
		{
			saleId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				foreignKey: true,
			},
			productId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				foreignKey: true,
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
		models.sales.belongsToMany(models.products, { 
		  foreignKey: 'saleId', 
		  otherKey: 'productId', 
		  through: salesProducts, 
		  as: 'sales' });

		models.products.belongsToMany(models.sales, { 
		  foreignKey: 'productId', 
		  otherKey: 'saleId',
		  through: salesProducts, 
		  as: 'products'});
	};

	return salesProducts;
};

module.exports = salesProducts;