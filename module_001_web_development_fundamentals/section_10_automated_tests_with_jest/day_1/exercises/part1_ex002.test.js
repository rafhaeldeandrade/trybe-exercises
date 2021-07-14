const { myRemove } = require('./part1_ex002');

describe('Testing myRemove()', () => {
  test('Verify if myRemove([1, 2, 3, 4], 3) returns the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Verify if myRemove([1, 2, 3, 4], 3) dont return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 3, 4, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verify if the array passed was changed', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 3, 4]);
  });

  test('Verify if myRemove([1, 2, 3, 4], 5) returns the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
