const ex002 = require('./ex_001');

describe('Testa a função rand()', () => {
  it('should return new implementation => a / b', () => {
    ex002.rand = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(ex002.rand(4, 2)).toBe(2);
    expect(ex002.rand).toHaveBeenCalled();
    expect(ex002.rand).toHaveBeenCalledTimes(1);
  });
});
