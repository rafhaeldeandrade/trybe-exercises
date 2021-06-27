const assert = require('assert');

const verify = password => {
  let uppercases = 0;
  let lowercases = 0;
  let numbers = 0;

  if (password.length < 9) {
    return false;
    // throw new Error('password should be larger than 8 chars')
  } else if (password === '') {
    return false;
    // throw new Error('password should not be null')
  }

  for (let char of password) {
    if (!isNaN(parseInt(char))) {
      numbers += 1;
    } else if (char === char.toLowerCase()) {
      lowercases += 1;
    } else if (char === char.toUpperCase()) {
      uppercases += 1;
    }
  }

  if (uppercases === 0 || lowercases === 0 || numbers === 0) {
    return false;
    // throw new Error('password should have one uppercase, one lowercase letter and a number at least')
  }

  return true;
};

assert.strictEqual(verify('123456789Aa'), true);
assert.strictEqual(verify('1234Aa78'), false);
assert.strictEqual(verify('abcdefgHI'), false);