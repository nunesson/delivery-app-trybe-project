const productsService = require('../Services/Products.service');

const findAll = async (req, res, next) => {
    try {
        const allProducts = await productsService.findAll();
        res.status(200).json(allProducts);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    findAll,
};