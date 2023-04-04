const { createSalesProduct, findBySaleId } = require('../Services/SalesProducts.service');

const createSPController = async (req, res) => {
  const { body } = req;
  const result = await createSalesProduct(body);

  // const teste = await findSalesProduct();

  res.status(201).json(result);
};

const findOrders = async (req, res) => {
  const { params: { id } } = req;

  const order = await findBySaleId(id);

  if (order.type === 'error') {
    return res.status(404).json({ message: order.message });
  }

  return res.status(200).json(order);
};

module.exports = {
    createSPController,
    findOrders,
};