const assert = require("assert");

/*
const greaterThanTen = (array) => {
  let results = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results += array[index];
    }
  }
  return results;
};
*/

const greaterThanTen = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter), result);
assert.deepStrictEqual(greaterThanTen([11, 12, 13, 14]), [11, 12, 13, 14]);
assert.deepStrictEqual(greaterThanTen([1, 2, 3, 4]), []);
assert.deepStrictEqual(
  greaterThanTen([10, 10, 10.9, 10.1, 10.099]),
  [10.9, 10.1, 10.099]
);
