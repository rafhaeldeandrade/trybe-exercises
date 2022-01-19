const fs = require('fs').promises;

const readSimpsonsFile = async () => {
  const readSimpsons = await fs.readFile('./simpsons.json', 'utf-8')

  return JSON.parse(readSimpsons);
}

const printAllCharacter = async () => {
  const simpsons = await readSimpsonsFile();

  return simpsons.forEach((c => console.log(`${c.id} - ${c.name}`)));
}

const searchById = async (id) => {
  const simpsons = await readSimpsonsFile();

  const findCharacter = simpsons.find((c => c.id === id.toString()));
  return new Promise((resolve, reject) => {
    if (!findCharacter) return reject(new Error('id não encontrado'));
    resolve(findCharacter);
  });
}

const removeIdTenAndSix = async () => {
  const simpsons = await readSimpsonsFile();

  const newArray = simpsons.filter(s => s.id !== '6' || s.id !== '10');
  fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

const createSimpsonsFamily = async () => {
  const simpsons = await readSimpsonsFile();

  const newArray = simpsons.filter(s => parseInt(s.id) < 5);
  fs.writeFile('.simpsonsFamily.json', JSON.stringify(newArray));
}

const addNelsonMutzToSimpsonsFamily = async () => {
  const simpsonsFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8').then(JSON.parse);
  const simpsons = await readSimpsonsFile();

  const nelsonMuntz = simpsons.find(c => c.name === 'Nelson Muntz');

  simpsonsFamily.push(nelsonMuntz);
  fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

const changeMuntzWithMaggie = () => {
  const simpsonsFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8').then(JSON.parse);
  const simpsons = await readSimpsonsFile();

  const nelsonMuntzIndex = simpsonsFamily.findIndex(c => c.name === 'Nelson Muntz');
  const maggieSimpson = simpsons.find(c => c.name === 'Maggie Simpson');

  simpsonsFamily.splice(nelsonMuntzIndex, 1, maggieSimpson);
  fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}
