const { verifyUser } = require('../Services/Login.service');

const aproveUsers = async (req, res) => {
  const { body: { email, password } } = req;

  const result = await verifyUser(email, password);

  if (result.type === undefined) {
    return res.status(200).json(result);
  }

  if (result.type === 'error') {
    return res.status(404).json(result);
  }
};

module.exports = { aproveUsers };