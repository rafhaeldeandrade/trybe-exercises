const assert = require("assert");

/*
const removeVowels = (word) => {
  const characters = word.split("");
  const results = [];

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === "a" ||
      characters[index] === "o" ||
      characters[index] === "i" ||
      characters[index] === "e" ||
      characters[index] === "u"
    ) {
      results.push(characters[index]);
    } else {
      results.push("_");
    }
  }
  return results;
};
*/

const removeVowels = (word) => {
  let result = "";
  let count = 1;

  for (let i = 0; i < word.length; i += 1) {
    if (
      word[i].toLowerCase() === "a" ||
      word[i].toLowerCase() === "e" ||
      word[i].toLowerCase() === "i" ||
      word[i].toLowerCase() === "o" ||
      word[i].toLowerCase() === "u"
    ) {
      result += count.toString();
      count += 1;
    } else {
      result += word[i];
    }
  }
  return result;
};

const parameter = "Dayane";
const result = "D1y2n3";

assert.deepStrictEqual(
  removeVowels(parameter),
  result,
  "Dayane deverá retornar D1y2n3"
);
assert.deepStrictEqual(removeVowels("Rafhael"), "R1fh23l");
assert.deepStrictEqual(removeVowels("Amanda"), "1m2nd3");
assert.deepStrictEqual(removeVowels("Nathalia"), "N1th2l34");
