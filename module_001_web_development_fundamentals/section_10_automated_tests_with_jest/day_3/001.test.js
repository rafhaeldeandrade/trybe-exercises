const math = require('./math');

describe('Testando a função subtrair()', () => {
  it('should return true when we call it', () => {
    math.subtrair = jest.fn();

    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
});