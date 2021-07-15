const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const arrayAnimals = Animals.filter((animal) => animal.name === name);
    if (arrayAnimals.length > 0) return resolve(arrayAnimals[0]);
    return reject(new Error('Nenhum animal com esse nome!'));
  }, 200);
});

const findAnimalByAge = (age) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const arrayAnimals = Animals.filter((animal) => animal.age === age);
    if (arrayAnimals.length > 0) return resolve(arrayAnimals);
    return reject(new Error('Nenhum animal com essa idade!'));
  }, 200);
});

const getAnimal = (nameOrAge, param = 'name') => {
  if (param === 'name') return findAnimalByName(nameOrAge).then((obj) => obj);
  if (param === 'age') return findAnimalByAge(nameOrAge).then((arr) => arr);
  return 'O segundo argument deve ser name ou age';
};

module.exports = { getAnimal };
