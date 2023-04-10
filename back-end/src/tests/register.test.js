const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http')
const app = require('../api/app')
const { users } = require('../database/models');
const { loginCustomer, newRegister, invalidRegister } = require('./mocks/users');
const md5 = require('md5');

chai.use(chaiHttp);

describe('Testando funções de register', function () {
  afterEach(() => {
    sinon.restore();
  });

  it('Testando se cria um usuario', async function () {

    const hash = md5(newRegister.password);
    const { name, email } = newRegister;
    const id = 4;

    sinon.stub(users, 'create').returns({dataValues: { id, name, email, password: hash, role: 'customer'}});
    const response = await chai.request(app).post('/register').send(newRegister);

    chai.expect(response.status).to.be.equal(201);
    chai.expect(response.body).to.be.deep.equal({ id, name, email, password: hash, role: 'customer'});
  })

  it('Testando se ao tentar criar conta com um usuario ja logado retorna erro', async function () {
    const response = await chai.request(app).post('/register').send(invalidRegister);

    chai.expect(response.status).to.be.equal(409);
    chai.expect(response.body).to.be.deep.equal({ message: 'usuario já existe' })
  })
})