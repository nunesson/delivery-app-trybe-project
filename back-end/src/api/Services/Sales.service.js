const { sales } = require('../../database/models');
const { decodeToken } = require('../../jwt/jwt');

const createSale = async ({
  deliveryAddress,
  deliveryNumber,
  sellerId,
  totalPrice,
}, userToken) => {
  const user = decodeToken(userToken);
  const newSale = await sales.create({ 
    userId: user.id, 
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: new Date(),
    status: 'Pendente',
   });
  return newSale;
};

const findAll = async () => {
  const allSales = await sales.findAll();
  return allSales;
};

const findById = async (id) => {
  const sale = await sales.findByPk(id);

  if (!sale) {
    return { type: 'error', message: 'Sale not found' };
  }

  if (sale) {
    return sale;
  }
};
  const update = async (id, status) => {
    const sale = await sales.update({ status }, { where: { id } });
  console.log(sale);
    if (!sale) {
      return { type: 'error', message: 'Sale not found' };
    }
    const saleUpdated = await findById(id);
    console.log(saleUpdated);
  
    if (sale) {
      return saleUpdated.dataValues;
    }
};

module.exports = { createSale, findAll, findById, update };