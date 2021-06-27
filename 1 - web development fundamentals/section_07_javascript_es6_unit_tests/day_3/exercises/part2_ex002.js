const assert = require("assert");
// escreva a função wordLengths aqui

function wordLengths(arr) {
  let newArray = [];
  for (let word of arr) {
    newArray.push(word.length);
  }
  return newArray;
}

const words = ["sun", "potato", "roundabout", "pizza"];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, "function");
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
