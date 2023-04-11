const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http')
const app = require('../api/app')
const { allUsers } = require('./mocks/users')

chai.use(chaiHttp);

describe('Testando funções de users', function () {
  afterEach(() => {
    sinon.restore();
  });

  it('Testando se a rota de seller retorna todos os sellers', async function () {
    const response = await chai.request(app).get('/seller')

    const seller = allUsers.find((s) => s.role === 'seller')
    const { name, id } = seller;
    const sellerExpect = { name, id }

    chai.expect(response.status).to.be.equal(200);
    chai.expect(response.body).to.be.deep.equal([sellerExpect]);
  })

  it('Testando se a rota de seller/user retorna todos os users', async function () {
    const response = await chai.request(app).get('/seller/users')

    chai.expect(response.status).to.be.equal(200);
    chai.expect(response.body[2]).to.be.deep.equal(allUsers[2]);
  })
})