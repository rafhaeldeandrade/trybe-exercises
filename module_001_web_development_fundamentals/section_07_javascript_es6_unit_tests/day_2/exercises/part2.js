const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
const changeTurno = (obj, key, value) => obj[key] = value;
changeTurno(lesson2, 'turno', 'manhã');

// Exercício 2
const listKeys = (obj) => Object.keys(obj);

// Exercício 3
const showLength = (obj) => Object.values(obj).length;

// Exercício 4
const listValues = (obj) => Object.values(obj);

// Exercício 5
let allLessons = { lesson1, lesson2, lesson3 }
console.log(allLessons);

// Exercício 6
const returnStudents = (obj) => {
  let keysArray = Object.keys(obj);
  let sum = 0;

  keysArray.forEach(item => sum += obj[item].numeroEstudantes);

  return sum;
}
console.log(returnStudents(allLessons));

// Exercício 7
const getKeyByIndex = (obj, index) => Object.values(obj)[index];
console.log(getKeyByIndex(lesson1, 0));

// Exercício 8
const checkIfKeyValueExists = (obj, key, value) => obj[key] === value ? true : false;
console.log(checkIfKeyValueExists(lesson3, 'turno', 'noite')); //true
console.log(checkIfKeyValueExists(lesson3, 'materia', 'Maria Clara')); //false

// Bonus.

const countStudents = (obj, lesson) => {
  let sum = 0;
  let keys = Object.keys(obj);
  keys.forEach(item => {
    if (obj[item].materia === lesson) {
      sum += obj[item].numeroEstudantes;
    };
  });
  return sum;
};

console.log(countStudents(allLessons, 'Matemática'));

const teacherReport = (obj, teacher) => {
  let keys = Object.keys(obj);
  let arrayLessons = [];
  let totalStudents = 0;
  keys.forEach(item => {
    if (obj[item].professor === teacher) {
      arrayLessons.push(obj[item].materia);
      totalStudents += obj[item].numeroEstudantes;
    }
  });
  return { professor: teacher, aulas: arrayLessons, estudantes: totalStudents, };
};

console.log(teacherReport(allLessons, 'Maria Clara'));