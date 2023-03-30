const users = require('../database/models');
const { generateToken } = require('../utils/JWT');

const authenticate = async ({ email, password }) => {
const login = await users.findOne({
  attributes: ['id', 'email'],
  where: { email, password },
});

if (!login) {
 return { type: 'corinthians', message: 'Invalid fields' };
}

const token = generateToken({ login, password });

return { token };
};

  module.exports = {
     
     authenticate };