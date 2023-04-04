const { createSale, findById } = require('../Services/Sales.service');
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

const findOneSale = async (req, res) => {
  const { params: { id } } = req;

  const sale = await findById(id);

  if (sale.type === 'error') {
    return res.status(404).json({ message: sale.message });
  }

  return res.status(200).json(sale);
};

module.exports = { createSaleController, findAll, findOneSale };