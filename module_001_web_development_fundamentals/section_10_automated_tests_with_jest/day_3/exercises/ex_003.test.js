const ex003 = require('./ex_001');

jest.mock('./ex_001');

describe('Testa a função rand()', () => {
  it('should return a * b * c then a * 2', () => {
    ex003.rand.mockImplementation((a, b, c) => a * b * c);

    expect(ex003.rand(5, 5, 4)).toBe(100);
    expect(ex003.rand).toHaveBeenCalled();
    expect(ex003.rand).toHaveBeenCalledTimes(1);

    ex003.rand.mockRestore();

    ex003.rand.mockImplementation((a) => a * 2);

    expect(ex003.rand(2)).toBe(4);
    expect(ex003.rand).toHaveBeenCalled();
    expect(ex003.rand).toHaveBeenCalledTimes(1);
  });
});
