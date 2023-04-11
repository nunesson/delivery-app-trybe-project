const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http')
const app = require('../api/app')
const { newSalesProduct, saleProduct } = require('./mocks/salesProducts');
const { allSales } = require('./mocks/sales');

chai.use(chaiHttp);

describe('Testando funções de salesProducts', function () {
  afterEach(() => {
    sinon.restore();
  });

  it('Testando se a rota de sales/products/ adiciona novo produto', async function () {
    const response = await chai.request(app).post('/sales/products').send(newSalesProduct)

    chai.expect(response.status).to.be.equal(201);
    chai.expect(response.body).to.be.deep.equal({ message: 'Sales products createds' });
  })

  it('Testando se a rota de sales/products/:id retorna erro', async function () {
    const response = await chai.request(app).get('/sales/products/10')

    chai.expect(response.status).to.be.equal(404);
    chai.expect(response.body).to.be.deep.equal({ message: 'Order not found' });
  })

  it('Testando se a rota de sales/products/:id retorna sale product', async function () {
    const response = await chai.request(app).get('/sales/products/1')

    chai.expect(response.status).to.be.equal(200);
    chai.expect(response.body[0].id).to.be.deep.equal(allSales[0].id);
  })
})