const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http')
const app = require('../api/app')
const { invalidRegister, adminToken, newUserReturn, newUserAdmin, token } = require('./mocks/users');

chai.use(chaiHttp);

describe('Testando funções de admin', function () {
  it('Testando se cria um usuario', async function () {
    const response = await chai.request(app).post('/admin').send({ ...newUserAdmin, role: 'customer' }).set('Authorization', adminToken);

    chai.expect(response.status).to.be.equal(201);
    chai.expect(response.body).to.be.deep.equal({ ...newUserReturn, role: "customer" });
  })

  it('Testando se caso nao haja um token retorna um erro', async function () {
    const response = await chai.request(app).post('/admin').send({ ...newUserAdmin, role: 'customer' })

    chai.expect(response.status).to.be.equal(401);
    chai.expect(response.body).to.be.deep.equal({ message: 'Token not found' });
  })

  it('Testando se caso estiver com token de nao admin retorna erro', async function () {
    const response = await chai.request(app).post('/admin').send({ ...newUserAdmin, role: 'customer' }).set('Authorization', token)

    chai.expect(response.status).to.be.equal(403);
    chai.expect(response.body).to.be.deep.equal({ message: 'Acesso negado' });
  })

  it('Testando se caso o token seja invalido ou esteja expirado retorna um erro', async function () {
    const response = await chai.request(app).post('/admin').send({ ...newUserAdmin, role: 'customer' }).set('Authorization', 'token 100% confiavel');

    chai.expect(response.status).to.be.equal(401);
    chai.expect(response.body).to.be.deep.equal({ message: 'Expired or invalid token' });
  })

  it('Testando se ao tentar criar conta com um usuario ja logado retorna erro', async function () {
    const response = await chai.request(app).post('/admin').send(invalidRegister).set('Authorization', adminToken);;

    chai.expect(response.status).to.be.equal(409);
    chai.expect(response.body).to.be.deep.equal({ message: 'usuario já existe' })
  })
})