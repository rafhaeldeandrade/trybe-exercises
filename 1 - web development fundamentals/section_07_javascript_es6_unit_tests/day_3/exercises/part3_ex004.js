const assert = require("assert");

/*function secondThirdSmallest(array) {
  let results = [];
  array.sort(function (x, y) {
    return x + y;
  });
  results = [array[1], array[2]];
  return results;
}
*/

const secondThirdSmallest = (array) => {
  if (array.length < 3) {
    throw new Error("O array precisa ter mais de 3 elementos");
  }
  let result = [];
  let sortedArray = array.sort((x, y) => x - y);
  result.push(sortedArray[1]);
  result.push(sortedArray[2]);

  return result;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter), result);
assert.deepStrictEqual(secondThirdSmallest([1, 2, 3]), [2, 3]);
assert.deepStrictEqual(secondThirdSmallest([1, 2]));
