const md5 = require('md5');
const { users } = require('../../database/models');

const verifyUser = async (userEmail, userPassword) => {
  const findUser = await users.findOne({ where: { email: userEmail } });

  if (!findUser) {
    return { type: 'error', message: 'Not found' };
  }

  if (md5(userPassword) === findUser.password) {
    return findUser;
  }

  return { type: 'error', message: 'Invalid Password' };
};

module.exports = { verifyUser };