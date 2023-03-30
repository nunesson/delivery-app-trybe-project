const { users } = require('../models');

const verifyUser = async (userEmail) => {
  const findUser = await users.findOne({ where: { email: userEmail } });

  if (!findUser) {
    return { type: 'error', message: 'Not found' };
  }
  
  return findUser;
};

module.exports = { verifyUser };