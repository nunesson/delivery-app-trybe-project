const { users } = require('../../database/models');

const verifySeller = async () => {
  const findSeller = await users.findAll({ where: { role: 'seller' },
  attributes: ['name', 'id'] }, { raw: true });
  return findSeller;
};

module.exports = { verifySeller };