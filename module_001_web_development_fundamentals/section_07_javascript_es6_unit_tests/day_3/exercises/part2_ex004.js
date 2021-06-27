const assert = require("assert");

// escreva a função findTheNeedle aqui
function findTheNeedle(arr, findWord) {
  for (let i in arr) {
    if (arr[i] == findWord) {
      return parseInt(i);
    }
  }

  return -1;
}

let words = ["house", "train", "slide", "needle", "book"];
let expected = 3;
let output = findTheNeedle(words, "needle");
assert.strictEqual(output, expected);

words = ["plant", "shelf", "arrow", "bird"];
expected = 0;
output = findTheNeedle(words, "plant");
assert.strictEqual(output, expected);

words = ["plant", "shelf", "arrow", "bird"];
expected = -1;
output = findTheNeedle(words, "plat");
assert.strictEqual(output, expected);
