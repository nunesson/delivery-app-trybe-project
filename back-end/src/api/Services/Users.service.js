const { users } = require('../../database/models');

const verifySeller = async () => {
  const findSeller = await users.findAll({ where: { role: 'seller' },
  attributes: ['name', 'id'] }, { raw: true });
  return findSeller;
};

const getUsers = async () => users.findAll();

module.exports = { verifySeller, getUsers };