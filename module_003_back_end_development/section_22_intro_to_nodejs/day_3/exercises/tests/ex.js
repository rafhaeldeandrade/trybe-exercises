const { expect } = require('chai');
const sinon = require('sinon');
const propNumber = require('../functions/propNumber');
const escreveArquivo = require('../functions/writeFile');
const fs = require('fs').promises;

describe('func propNumber()', () => {
  describe('Quando o parâmetro for > 0', () => {
    it('Deve retornar "positivo"', () => {
      const result = propNumber(1).toLowerCase();

      expect(result).to.be.equals('positivo');
    });
  });

  describe('Quando o parâmetro for < 0', () => {
    it('Deve retornar "negativo"', () => {
      const result = propNumber(-2).toLowerCase();

      expect(result).to.be.equals('negativo');
    });
  })

  describe('Quando o parâmetro for = 0', () => {
    it('Deve retornar "neutro"', () => {
      const result = propNumber(0).toLowerCase();

      expect(result).to.be.equals('neutro');
    })
  })

  describe('Quando o parâmetro for uma string', () => {
    it('Deve retornar "o valor deve ser um número"', () => {
      const result = propNumber('qualquer coisa').toLowerCase();

      expect(result).to.be.equals('o valor deve ser um número')
    })
  })
});

describe('func writeFile()', () => {
  before(() => {
    sinon.stub(fs, 'writeFile').returns('ok');
  });

  after(() => {
    fs.writeFile.restore();
  });

  describe('quando a função consegue escrever no arquivo', () => {
    it('Deve retornar "ok" assim que concluir a escrita', () => {
      const FILE = 'test.txt';
      const CONTENT = 'isso é um teste';

      const result = escreveArquivo(FILE, CONTENT);
  
      expect(result).to.be.equals('ok');
    });
  })
});