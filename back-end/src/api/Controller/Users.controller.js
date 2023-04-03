const { verifySeller } = require('../Services/Users.service');

const verifySellerController = async (req, res) => {
  const result = await verifySeller();
  return res.status(200).json(result);
};

module.exports = { verifySellerController };