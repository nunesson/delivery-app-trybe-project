const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http')
const app = require('../api/app')
const allProducts = require('./mocks/products')

chai.use(chaiHttp);

describe('Testando funções de products', function () {
  afterEach(() => {
    sinon.restore();
  });

  it('Testando se a rota de products retorna todos os products', async function () {
    const response = await chai.request(app).get('/products')

    chai.expect(response.status).to.be.equal(200);
    chai.expect(response.body).to.be.deep.equal(allProducts);
  })
})