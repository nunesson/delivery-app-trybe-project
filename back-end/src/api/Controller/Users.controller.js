const { verifySeller, getUsers } = require('../Services/Users.service');

const verifySellerController = async (req, res) => {
  const result = await verifySeller();
  return res.status(200).json(result);
};

const getAllUsers = async (req, res) => {
  const result = await getUsers();
  return res.status(200).json(result);
};

module.exports = { verifySellerController, getAllUsers };