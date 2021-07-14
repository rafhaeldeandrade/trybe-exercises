function techList(array, name) {
  if (!array.length > 0) return 'Vazio!';
  const sorted = array.sort();
  const returnArray = [];
  sorted.forEach((el) => {
    returnArray.push({ tech: el, name });
  });
  return returnArray;
}

module.exports = { techList };
