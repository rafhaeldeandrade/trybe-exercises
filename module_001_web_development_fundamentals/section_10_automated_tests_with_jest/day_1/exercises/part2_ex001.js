function encode(stringParaEncode) {
  const change = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  const phraseArray = Array.from(stringParaEncode);
  let encodedString = '';

  phraseArray.forEach((letter) => {
    const letterLowerCase = letter.toLowerCase();
    if (change[letterLowerCase]) encodedString += change[letterLowerCase];
    if (!change[letterLowerCase]) encodedString += letter;
  });
  return encodedString;
}

function decode(stringParaDecode) {
  const change = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  const phraseArray = Array.from(stringParaDecode);
  let decodedString = '';

  phraseArray.forEach((letter) => {
    const letterLowerCase = letter.toLowerCase();
    if (change[letterLowerCase]) decodedString += change[letterLowerCase];
    if (!change[letterLowerCase]) decodedString += letter;
  });
  return decodedString;
}

module.exports = { encode, decode };
