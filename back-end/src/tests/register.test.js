const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http')
const app = require('../api/app')
const { newRegister, invalidRegister } = require('./mocks/users');

chai.use(chaiHttp);

describe('Testando funções de register', function () {
  it('Testando se cria um usuario', async function () {
    const response = await chai.request(app).post('/register').send(newRegister);

    chai.expect(response.status).to.be.equal(201);
    chai.expect(response.body).to.exist;
  })

  it('Testando se ao tentar criar conta com um usuario ja logado retorna erro', async function () {
    const response = await chai.request(app).post('/register').send(invalidRegister);

    chai.expect(response.status).to.be.equal(409);
    chai.expect(response.body).to.be.deep.equal({ message: 'usuario já existe' })
  })
})