const { myFizzBuzz } = require('./part1_ex004');

describe('', () => {
  test('Chame com número divisível por 3 e 5 e verifique se o retorno é esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('Chame com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('Chame com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });

  test('Chame com número que não é divisível por 3 ou 5 e veja se o retorno é o esperado', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });

  test('Chame com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('5')).toBe(false);
  });
});
