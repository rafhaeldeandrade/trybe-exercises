const { obj1, obj2, obj3 } = require('./part1_ex005');

describe('Comparando objetos', () => {
  test('Verificando se são idênticos ou não', () => {
    expect(obj1).toEqual(obj2);
  });

  test('Verificando se obj1 e obj3 são idênticos', () => {
    expect(obj1).toEqual(obj3);
  });

  test('Verificando se obj2 e obj3 são idênticos', () => {
    expect(obj2).toEqual(obj3);
  });
});
