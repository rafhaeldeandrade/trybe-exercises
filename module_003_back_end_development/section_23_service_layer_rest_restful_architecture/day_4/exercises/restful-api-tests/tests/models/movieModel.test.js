/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const movieModel = require('../../models/movieModel');

describe('movieModel: Insere um novo filme no BD', () => {
  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const execute = [{ insertId: 1 }];

      sinon.stub(connection, 'execute').resolves(execute);
    });

    it('retorna um objeto', async () => {
      const response = await movieModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await movieModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

    after(() => {
      connection.execute.restore();
    });
  });
});

describe('movieModel: Procura por um filme com determinado id [findById(:id)]', () => {
  describe('Quando o filme não existe', () => {
    const payloadMovie = {
      id: 9999,
    };

    before(async () => {
      const execute = [[]];

      sinon.stub(connection, 'execute').resolves(execute);
    });

    it('Deve retornar um array', async () => {
      const response = await movieModel.findById(payloadMovie);

      expect(response).to.be.an('array');
    });

    it('O array deve estar vazio', async () => {
      const response = await movieModel.findById(payloadMovie);

      expect(response).to.be.empty;
    });

    after(() => {
      connection.execute.restore();
    });
  });

  describe('Quando o filme existe', () => {
    const payloadMovie = {
      id: 1,
    };

    before(() => {
      const execute = [
        [
          {
            id: 1,
            title: 'Titanic',
            release_year: 1998,
            directed_by: 'eu msm',
          },
        ],
      ];

      sinon.stub(connection, 'execute').resolves(execute);
    });

    it('Deve retornar um array', async () => {
      const response = await movieModel.findById(payloadMovie);

      expect(response).to.be.an('array');
    });

    it('O array não deve estar vazio', async () => {
      const response = await movieModel.findById(payloadMovie);

      expect(response).to.not.be.empty;
    });

    it('Todos os itens do array devem ser objetos', async () => {
      const response = await movieModel.findById(payloadMovie);

      response.map((p) => expect(p).to.be.an('object'));
    });

    it('Todos os itens do array devem possuir as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const response = await movieModel.findById(payloadMovie);

      response.map((p) =>
        expect(p).to.have.keys(['id', 'title', 'releaseYear', 'directedBy']),
      );
    });

    after(() => {
      connection.execute.restore();
    });
  });
});
