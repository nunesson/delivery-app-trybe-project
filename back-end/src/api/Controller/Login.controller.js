const { verifyUser, getUser } = require('../Services/Login.service');

const aproveUsers = async (req, res) => {
  const { body: { email, password } } = req;
  const { headers: { authorization } } = req;

  if (authorization) {
    const user = getUser(authorization);

    return res.status(200).json(user);
  }

  const result = await verifyUser(email, password);

  if (result.type === undefined) {
    return res.status(200).json(result);
  }

  return res.status(404).json(result);
};

module.exports = { aproveUsers };