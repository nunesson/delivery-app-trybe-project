const productsService = require('../Services/Products.service');

const findAll = async (req, res) => {
    const allProducts = await productsService.findAll();
    res.status(200).json(allProducts);
};

module.exports = {
    findAll,
};