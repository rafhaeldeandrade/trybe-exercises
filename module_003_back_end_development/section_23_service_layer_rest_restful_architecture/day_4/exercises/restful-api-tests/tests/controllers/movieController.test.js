const sinon = require('sinon');
const { expect } = require('chai');

const movieService = require('../../services/movieService');
const movieController = require('../../controllers/movieController');

describe('movieController: Ao chamar o controller de create', () => {
  const ERROR_MESSAGE = { message: 'Dados inválidos' };
  const SUCCESS_MESSAGE = { message: 'Filme criado com sucesso!' };
  describe('quando o payload informado não é válido', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(movieService, 'create').resolves(false);
    });

    after(() => {
      movieService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await movieController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o json com a mensagem "Dados inválidos"', async () => {
      await movieController.create(request, response);
      expect(response.json.calledWith(ERROR_MESSAGE)).to.be.equal(true);
    });
  });

  describe('quando é inserido com sucesso', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(movieService, 'create').resolves(true);
    });

    after(() => {
      movieService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await movieController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await movieController.create(request, response);
      expect(response.json.calledWith(SUCCESS_MESSAGE)).to.be.equal(true);
    });
  });
});

describe('Ao chamar o controller de findById()', () => {
  const ERROR_MESSAGE = { message: 'Filme não encontrado' };
  describe('Quando o filme não foi encontrado', () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = { id: 9999 };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(movieService, 'findById').resolves(false);
    });

    after(() => {
      movieService.findById.restore();
    });

    it('É chamado o status com o código 404', async () => {
      await movieController.findById(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('É chamado o json com um erro', async () => {
      await movieController.findById(request, response);
      expect(response.json.calledWith(ERROR_MESSAGE)).to.be.equal(true);
    });
  });

  describe('Quando o filme for encontrado', () => {
    const response = {};
    const request = {};
    const execute = [
      { id: 1, title: 'Titanic', releaseYear: 1998, directedBy: 'eu msm' },
    ];

    before(() => {
      request.params = { id: 1 };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(movieService, 'findById').resolves(execute);
    });

    after(() => {
      movieService.findById.restore();
    });

    it('É chamado o status com o código 200', async () => {
      await movieController.findById(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('É chamado o json com um array de obj', async () => {
      await movieController.findById(request, response);
      expect(response.json.calledWith(execute)).to.be.equal(true);
    });
  });
});
