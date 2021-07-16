const math = require('./math');

jest.mock('./math');

describe('Testando a função dividir()', () => {
  it('should return 15 as default value, 2 on its first call and 5 on its second call', () => {
    math.dividir.mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5);

    expect(math.dividir(4, 2)).toBe(2);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledTimes(1);

    expect(math.dividir(10, 2)).toBe(5);
    expect(math.dividir).toBeCalledWith(10, 2);
    expect(math.dividir).toHaveBeenCalledTimes(2);

    expect(math.dividir(30, 2)).toBe(15);
    expect(math.dividir).toBeCalledWith(30, 2);
    expect(math.dividir).toHaveBeenCalledTimes(3);
  });
});
