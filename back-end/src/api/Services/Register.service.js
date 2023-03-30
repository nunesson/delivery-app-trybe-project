const md5 = require('md5');
const { users } = require('../../database/models');
const { errorType } = require('../Middlewares/Error');

const register = async ({ name, email, password }) => {
    const hash = md5(password);
    const user = await users.create({ name, email, password: hash, role: 'customer' });
    errorType(!user, 'dados invalidos', 404);
    return user.dataValues;
};

module.exports = {
    register,
};