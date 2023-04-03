const { salesProducts } = require('../../database/models');

const createSalesProduct = async ({ carrinho, saleId }) => carrinho.map(async (c) => {
    const result = await salesProducts.create({ saleId, productId: c.id, quantity: c.quantity });

    return result;
  });

module.exports = {
  createSalesProduct,
};