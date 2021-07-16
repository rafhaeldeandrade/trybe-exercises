const ex001 = require('./ex_001');

describe('Testa a função rand()', () => {
  it('should return 10', () => {
    ex001.rand = jest.fn().mockReturnValue(10);

    expect(ex001.rand()).toBe(10);
    expect(ex001.rand).toHaveBeenCalled();
    expect(ex001.rand).toHaveBeenCalledTimes(1);
  });
});
