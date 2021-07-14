const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, ...details) => {
  const filtro = professionalBoard.filter((obj) => obj.id === id);
  const returnArray = [];
  if (!filtro.length > 0) return 'ID não identificada';
  const detailsExist = filtro.every((obj) => {
      const keys = Object.keys(obj);
      return details.every((detail) => {
        if (keys.includes(detail)) returnArray.push(obj[detail]);
        return obj[detail];
      });
    });
  if (!detailsExist) return 'Informação indisponível';
  return returnArray.join(' ');
};

module.exports = { searchEmployee };

console.log(searchEmployee('9852-2-2', 'firstName', 'lastName', 'specialities'));