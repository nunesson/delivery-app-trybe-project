const newSale = {
  deliveryAddress: 'endereco enorme',
  deliveryNumber: '132',
  sellerId: 2,
  totalPrice: "20.04",
}

const allSales = [{
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: "20.04",
  // saleDate: "2023-04-11T20:08:59.000Z",
  deliveryAddress: 'endereco enorme',
  deliveryNumber: '132',
  status: 'Pendente',
}]

const updatedSale = {
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: "20.04",
  // saleDate: "2023-04-11T20:08:59.000Z",
  deliveryAddress: 'endereco enorme',
  deliveryNumber: '132',
  status: 'Show de bola',
}

module.exports = {
  allSales,
  newSale,
  updatedSale,
}