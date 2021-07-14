const { sum } = require('./part1_ex001');

describe('Testando a função sum()', () => {
  test('Tests if 4 + 5 is 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Tests if 0 + 0 is 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Tests if sum function throws an error when 4 and "5" are passed as parameters', () => {
    expect(() => { sum(4, '5'); }).toThrow();
  });

  test('Tests if the error message is "parameters must be numbers"', () => {
    expect(() => { sum(4, '5'); }).toThrowError(new Error('parameters must be numbers'));
  });
});
