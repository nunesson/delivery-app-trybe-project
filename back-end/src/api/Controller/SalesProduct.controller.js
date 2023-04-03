const { createSalesProduct } = require('../Services/SalesProducts.service');

const createSPController = async (req, res) => {
  const { body } = req;
  console.log(body);
  const result = await createSalesProduct(body);
  res.status(201).json(result);
};

module.exports = {
    createSPController,
};