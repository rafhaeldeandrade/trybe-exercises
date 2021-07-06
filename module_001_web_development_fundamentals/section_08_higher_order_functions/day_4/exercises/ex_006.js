const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const media = grades.reduce((acc, curr) => {
    acc.push(curr.reduce((notaAcc, notaCurr, index, array) => {
      if (index === array.length -1) {
        return (notaAcc + notaCurr) / array.length
      }
      return notaAcc += notaCurr;
    }));
    return acc;
  }, []);
  
  const returnArray = students.map((nome, index) => {
    return { name: nome, average: media[index] }
  })
  return returnArray;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
