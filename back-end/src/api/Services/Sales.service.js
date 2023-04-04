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

module.exports = { createSale };