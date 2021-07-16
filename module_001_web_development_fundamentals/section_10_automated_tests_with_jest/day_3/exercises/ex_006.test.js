const ex006 = require('./ex_006');

describe('testando a requisição', () => {
  ex006.fetchDog = jest.fn();
  afterEach(ex006.fetchDog.mockReset);

  test('testando requisição caso a promisse resolva', async () => {
    ex006.fetchDog.mockResolvedValue('request sucess');

    ex006.fetchDog();
    expect(ex006.fetchDog).toHaveBeenCalled();
    expect(ex006.fetchDog).toHaveBeenCalledTimes(1);
    expect(ex006.fetchDog()).resolves.toBe('request sucess');
    expect(ex006.fetchDog).toHaveBeenCalledTimes(2);
  });

  test('testando requisição caso a promisse seja rejeitada', async () => {
    ex006.fetchDog.mockRejectedValue('request failed');

    expect(ex006.fetchDog).toHaveBeenCalledTimes(0);
    expect(ex006.fetchDog()).rejects.toMatch('request failed');
    expect(ex006.fetchDog).toHaveBeenCalledTimes(1);
  });
});
