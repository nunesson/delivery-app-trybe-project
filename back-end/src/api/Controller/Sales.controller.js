const { createSale } = require('../Services/Sales.service');

const createSaleController = async (req, res) => {
  const { headers: { authorization } } = req;
  const result = await createSale(req.body, authorization);
  return res.status(201).json(result);
};

module.exports = { createSaleController };