const { createSalesProduct } = require('../Services/SalesProducts.service');

const createSPController = async (req, res) => {
  const { body } = req;
  const result = await createSalesProduct(body);

  // const teste = await findSalesProduct();

  res.status(201).json(result);
};

module.exports = {
    createSPController,
};