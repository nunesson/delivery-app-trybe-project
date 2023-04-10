const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http')
const app = require('../api/app')
const {
  onlyCustomer,
  loginCustomer,
  loginInvalid,
  invalidCustomerPassword,
  token,
  getUserReturn
} = require('./mocks/users')

chai.use(chaiHttp);

describe('Testando funções de login', function () {
  afterEach(() => {
    sinon.restore();
  });

  it('Testando se aproveUsers valida usuario', async function () {
    const response = await chai.request(app).post('/login').send(loginCustomer)

    delete response.body.token

    chai.expect(response.status).to.be.equal(200);
    chai.expect(response.body).to.be.deep.equal(onlyCustomer);
  })

  it('Testando aproveUsers se nao existe usuario', async function () {
    const response = await chai.request(app).post('/login').send(loginInvalid)

    delete response.body.token

    chai.expect(response.status).to.be.equal(404);
    chai.expect(response.body).to.be.deep.equal({ type: 'error', message: 'Not found' });
  })

  it('Testando aproveUsers caso senha esteja errada', async function () {
    const response = await chai.request(app).post('/login').send(invalidCustomerPassword)

    delete response.body.token

    chai.expect(response.status).to.be.equal(404);
    chai.expect(response.body).to.be.deep.equal({ type: 'error', message: 'Invalid Password' });
  })

  it('Testando se getUser retorna usuario', async function () {
    const response = await chai.request(app).post('/login').set("Authorization", token)

    chai.expect(response.status).to.be.equal(200);
    chai.expect(response.body).to.be.deep.equal(getUserReturn);
  })
})