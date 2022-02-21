const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = require('../api/server');
const { User } = require('../models');
const users = require('./mocks/usersMock.json');

chai.use(chaiHttp);

describe('GET /api/users/:userId', () => {
  describe('O endpoint deve ser autenticado:', () => {
    let response;
    before(async () => {
      response = await chai.request(app).get('/api/users/1');
    });

    it('Caso não seja informado um token, deverá retornar 400', async () => {
      expect(response).to.have.status(400);
    });

    it('Caso não seja informado um token, deverá retornar a mensagem: "Token não encontrado ou informado"', async () => {
      expect(response.body.message).to.equal(
        'Token não encontrado ou informado',
      );
    });
  });

  describe('Caso o token seja válido e o id do parâmetro não é da pessoa autenticada: ', () => {
    let response;

    before(async () => {
      sinon.stub(User, 'findOne').resolves(users[1]);
      sinon.stub(jwt, 'verify').returns({ username: users[0].username });

      response = await chai
        .request(app)
        .get('/api/users/2')
        .set('Authorization', 'qualquercoisa');
    });

    after(() => {
      User.findOne.restore();
      jwt.verify.restore();
    });

    it('Deverá retornar 401', () => {
      expect(response).to.have.status(401);
    });

    it('Deverá retornar a mensagem de acesso negado', () => {
      expect(response.body.message).to.equal('Acesso negado');
    });
  });

  describe('Caso o token seja válido e o id do parâmetro é da pessoa autenticada', () => {
    let response;

    before(async () => {
      sinon.stub(User, 'findOne').resolves(users[0]);
      sinon.stub(jwt, 'verify').returns({ username: users[0].username });

      response = await chai
        .request(app)
        .get('/api/users/2')
        .set('Authorization', 'qualquercoisa');
    });

    after(() => {
      User.findOne.restore();
      jwt.verify.restore();
    });

    it('Deverá retornar status 200', async () => {
      expect(response).to.have.status(200);
    });

    it('Deverá retornar os dados da pessoa', async () => {
      expect(response.body)
        .to.be.an('object')
        .that.has.all.keys('id', 'username', 'password');
    });
  });
});
