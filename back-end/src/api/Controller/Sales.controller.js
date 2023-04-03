const { createSale } = require('../Services/Sales.service');

const createSaleController = async (req, res) => {
  const result = await createSale(req.body);
  return res.status(201).json(result);
};

module.exports = { createSaleController };