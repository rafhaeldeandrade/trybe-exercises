const changeX = (str) => {
  let frase = 'Tryber x aqui!';
  return frase.replace(/x/, str);
};

let arraySkills = ['html', 'css', 'javascript', 'python', 'engenharia de software'];
arraySkills.sort();

const stringConsoleLog = (str) => {
  return `${str} Minhas cinco principais habilidades são:
${arraySkills} #goTrybe`
}

console.log(stringConsoleLog(changeX('Rafhael')));