const assert = require('assert');

// escreva a função removeMiddle aqui
const removeMiddle = (words) => {
  let index = Math.floor(words.length / 2);
  return words.splice(index, 1);
};

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];

const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);