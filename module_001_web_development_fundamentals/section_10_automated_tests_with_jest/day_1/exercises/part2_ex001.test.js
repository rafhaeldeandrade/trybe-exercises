const { encode, decode } = require('./part2_ex001');

describe('Testes para encode() e decode()', () => {
  describe('Teste se encode e decode são funções', () => {
    test('tests if encode() is a function', () => {
      expect(typeof encode).toBe('function');
    });

    test('tests if decode() is a function', () => {
      expect(typeof decode).toBe('function');
    });
  });
  test('Teste se as vogais a,e,i,o,u são convertidas em 1,2,3,4 e 5, respectivamente', () => {
    expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
  });
  test('Teste se os números 1,2,3,4,5 são convertidos em a,e,i,o,u, respectivamente', () => {
    expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
  });
});

describe('Teste se as demais letras/números não são convertidos para cada caso', () => {
  test('"oi eu msm pq" retorna "43 25 msm pq"', () => {
    expect(encode('oi eu msm pq')).toBe('43 25 msm pq');
  });
  test('"43 25 msm pq" retorna "oi eu msm pq"', () => {
    expect(decode('43 25 msm pq')).toBe('oi eu msm pq');
  });

  describe('Testa se a string de saída tem o mesmo tamanho da entrada', () => {
    test('Função encode()', () => {
      expect(encode('oi nois msm pq').length).toBe('oi nois msm pq'.length);
    });
    test('Função decode()', () => {
      expect(decode('43 n43s msm pq').length).toBe('43 n43s msm pq'.length);
    });
  });
});
