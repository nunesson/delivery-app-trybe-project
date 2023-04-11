const { createSalesProduct, findBySaleId } = require('../Services/SalesProducts.service');

const createSPController = async (req, res) => {
  const { body } = req;
  await createSalesProduct(body);

  res.status(201).json({ message: 'Sales products createds' });
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