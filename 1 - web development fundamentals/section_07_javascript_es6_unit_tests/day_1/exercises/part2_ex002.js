const longestWord = (phrase) => {
  let arrayPhrases = phrase.split(' ');
  let biggerWord = arrayPhrases[0];
  arrayPhrases.forEach(element => {
    if (element.length > biggerWord.length) {
      biggerWord = element;
    }
  });
  return biggerWord;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'