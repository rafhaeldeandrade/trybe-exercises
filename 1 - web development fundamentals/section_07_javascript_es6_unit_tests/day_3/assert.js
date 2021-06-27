const assert = require("assert");

// assert.strictEqual(50, 50);
// assert.strictEqual(50, 70);

function division(x, y) {
  return x / y;
}

const expected = division(9, 3);
assert.strictEqual(expected, "3", "Nove dividio por três é igual a três");
