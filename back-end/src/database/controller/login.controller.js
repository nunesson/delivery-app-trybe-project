const { verifyUser } = require('../service/login.service');

const aproveUsers = async (req, res) => {
  const { body: { email } } = req;

  const result = await verifyUser(email);

  if (result.type === 'error') {
    return res.status(404).json(result);
  }

  return res.status(200).json(result);
};

module.exports = { aproveUsers };