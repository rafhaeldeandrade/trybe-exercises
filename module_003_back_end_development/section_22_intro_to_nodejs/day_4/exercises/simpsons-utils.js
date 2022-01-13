const fs = require('fs').promises;

const file = './simpsons.json';

const readSimpsons = () => {
  return fs.readFile(file, 'utf8')
    .then(data => JSON.parse(data));
}

const writeSimpsons = (data) => {
  return fs.writeFile(file, JSON.stringify(data));
}

module.exports = { readSimpsons, writeSimpsons };