const math = require('./math');

describe('Testando a função multiplicar()', () => {
  it('should return 10 as default value', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
  });
});
