const { getUserName } = require('./ex_003');

describe('Testing getUserName() with async/await', () => {
  it('should return a name if the id exists', async () => {
    expect.assertions(1);
    await expect(getUserName(4)).resolves.toBe('Mark');
  });

  it('should return User with id not found', async () => {
    expect.assertions(1);
    await expect(getUserName(6)).rejects.toThrow();
  });
});
