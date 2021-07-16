const math = require('./math');

describe('Testando a função subtrair()', () => {
  it('should return 20 as default', () => {
    const spy = jest.spyOn(math, 'subtrair')
    .mockImplementation((a, b) => a + b)
    .mockReturnValue(20);

    expect(spy(10, 10)).toBe(20);
    expect(spy).toHaveBeenCalled();
    expect(spy).toBeCalledWith(10, 10);

    spy.mockRestore();

    expect(math.subtrair(10, 2)).toBe(8);
  });
});
