/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const { expect } = require('chai');

const movieModel = require('../../models/movieModel');
const movieService = require('../../services/movieService');

describe('movieService: Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await movieService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await movieService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(movieModel, 'create').resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      movieModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await movieService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await movieService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});

describe('movieService: Procura por um filme com determinado id [findById(:id)]', () => {
  describe('Quando o filme não existe', () => {
    const payloadMovie = { id: 99 };

    before(() => {
      const execute = [];
      sinon.stub(movieModel, 'findById').resolves(execute);
    });

    after(() => {
      movieModel.findById.restore();
    });

    it('Deve retornar um array', async () => {
      const response = await movieService.findById(payloadMovie);

      expect(response).to.be.an('array');
    });

    it('O array deve estar vazio', async () => {
      const response = await movieService.findById(payloadMovie);

      expect(response).to.be.empty;
    });
  });

  describe('Quando o filme existe', () => {
    const payloadMovie = { id: 1 };

    before(() => {
      const execute = [
        { id: 1, title: 'Titanic', releaseYear: 1998, directedBy: 'eu msm' },
      ];
      sinon.stub(movieModel, 'findById').resolves(execute);
    });

    after(() => {
      movieModel.findById.restore();
    });

    it('Deve retornar um array', async () => {
      const response = await movieService.findById(payloadMovie);

      expect(response).to.be.an('array');
    });

    it('O array deve conter objetos', async () => {
      const response = await movieService.findById(payloadMovie);

      response.map((m) => expect(m).to.be.an('object'));
    });

    it('Os objetos devem possuir as propriedades: "id", "title", "releaseYear", "directedBy"', async () => {
      const response = await movieService.findById(payloadMovie);

      response.map((m) =>
        expect(m).to.have.keys(['id', 'title', 'releaseYear', 'directedBy']),
      );
    });
  });
});
