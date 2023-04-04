const { createSale } = require('../Services/Sales.service');
const saleService = require('../Services/Sales.service');

const createSaleController = async (req, res) => {
  const { headers: { authorization } } = req;
  const result = await createSale(req.body, authorization);
  return res.status(201).json(result);
};

const findAll = async (req, res, next) => {
  try {
      const allSales = await saleService.findAll();
      res.status(200).json(allSales);
  } catch (err) {
      next(err);
  }
};

module.exports = { createSaleController, findAll };