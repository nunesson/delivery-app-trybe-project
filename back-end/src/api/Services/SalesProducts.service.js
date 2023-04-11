const { salesProducts, products, sales } = require('../../database/models');

const createSalesProduct = async ({ carrinho, saleId }) => {
  const createCarrinho = carrinho.map(async (c) => {
    await salesProducts.create({ 
      saleId, 
      productId: c.id, 
      quantity: c.quantity });
  });

  await Promise.all(createCarrinho);

  return createCarrinho;
};

// const findSalesProduct = async () => {
//   const result = await salesProducts.findOne({ where: { saleId: 1 } });
//   return result;
// };

const findBySaleId = async (id) => {
  const orders = await sales.findAll({ 
    where: { id },
    include: {
      model: products,
      as: 'products',
      attributes: ['name', 'price', 'urlImage'],
    }, 
  });

  if (orders.length === 0) {
    return { type: 'error', message: 'Order not found' };
  }
  
  return orders;
};

module.exports = {
  createSalesProduct,
  findBySaleId,
  // findSalesProduct,
};