const md5 = require('md5');
const { Op } = require('sequelize');
const { users } = require('../../database/models');
const { errorType } = require('../Middlewares/Error');

const register = async ({ name, email, password }) => {
    const hash = md5(password);
    const userExist = await users.findOne({ where: {
        [Op.or]: [
          { email },
          { name },
        ],
      } });
      errorType(userExist, 'usuario já existe', 409);
    const user = await users.create({ name, email, password: hash, role: 'customer' });
    return user.dataValues;
};

module.exports = {
    register,
};