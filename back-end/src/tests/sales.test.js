const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http')
const app = require('../api/app')
const { newSale, allSales, updatedSale } = require('./mocks/sales')
const { token } = require('./mocks/users');

chai.use(chaiHttp);

describe('Testando funções de sales', function () {
  afterEach(() => {
    sinon.restore();
  });

  it('Testando se a rota de sales cria uma sales', async function () {
    const response = await chai.request(app).post('/sales').send(newSale).set('authorization', token)

    delete response.body.saleDate;

    chai.expect(response.status).to.be.equal(201);
    chai.expect(response.body).to.be.deep.equal(allSales[0]);
  })

  it('Testando se a rota de sales retorna todas as sales', async function () {
    const response = await chai.request(app).get('/sales')

    delete response.body[0].saleDate;

    chai.expect(response.status).to.be.equal(200);
    chai.expect(response.body).to.be.deep.equal(allSales);
  })

  it('Testando se ao tentar achar sale pelo id ', async function () {
    const response = await chai.request(app).get('/sales/1')

    delete response.body.saleDate;

    chai.expect(response.status).to.be.equal(200);
    chai.expect(response.body).to.be.deep.equal(allSales[0]);
  })

  it('Testando se ao tentar achar sale pelo id retorna erro', async function () {
    const response = await chai.request(app).get('/sales/10')

    chai.expect(response.status).to.be.equal(404);
    chai.expect(response.body).to.be.deep.equal({ message: 'Sale not found' });
  })

  it('Testando se consegue dar update pelo id na rota /sales/orders/10 retorna erro', async function () {
    const response = await chai.request(app).put('/sales/orders/10').send({ status: 'nem existekk' })

    chai.expect(response.status).to.be.equal(404);
    chai.expect(response.body).to.be.deep.equal({ message: 'Sale not found' });
  })

  it('Testando se consegue dar update pelo id na rota /sales/orders/1', async function () {
    const response = await chai.request(app).put('/sales/orders/1').send({ status: 'Show de bola' })

    chai.expect(response.status).to.be.equal(200);
    chai.expect(response.body.status).to.be.deep.equal('Show de bola');
  })
})