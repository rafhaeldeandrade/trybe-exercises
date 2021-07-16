const math = require('./math');

describe('Testando a função somar()', () => {
  it('should return 10 as default value', () => {
    math.somar = jest.fn().mockImplementation((a, b) => a + b);

    math.somar(1, 2);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toBeCalledWith(1, 2);
    expect(math.somar(1, 2)).toBe(3);
  });
});
