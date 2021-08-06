function generateHashtag (str) {
  if (str.split(' ')) return false;
  let finalStr = '#';
  const words = str.split(' ');
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  const fullWords = capitalizedWords.join('');
  return finalStr + fullWords;
}

console.log(generateHashtag("Do We have A Hashtag"));