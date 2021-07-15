const { getUserName } = require('./ex_002');

describe('Testing getUserName() with promise', () => {
  it('should return a name if the id exists', () => {
    expect.assertions(1);
    return getUserName(4).then((name) => {
      expect(name).toBe('Mark');
    });
  });

  it('should return User with id not found', () => {
    expect.assertions(1);
    return expect(getUserName(6)).rejects.toEqual(new Error('User with 6 not found.'));
  });
});
