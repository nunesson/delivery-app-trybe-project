const md5 = require('md5');
const { users } = require('../../database/models');
const { generateToken, decodeToken } = require('../../jwt/jwt');

const verifyUser = async (userEmail, userPassword) => {
  const findUser = await users.findOne({ where: { email: userEmail } });
  if (!findUser) {
    return { type: 'error', message: 'Not found' };
  }

  const token = generateToken(findUser);
  if (md5(userPassword) === findUser.password) {
    return { ...findUser.dataValues, token };
  }

  return { type: 'error', message: 'Invalid Password' };
};

const getUser = (token) => {
  const user = decodeToken(token);

  return user;
};

module.exports = { verifyUser, getUser };