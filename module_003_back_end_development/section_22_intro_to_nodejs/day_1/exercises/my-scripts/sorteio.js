const readline = require('readline-sync');

const sorteio = () => {
  const generatedNumber = Math.floor(Math.random() * 11);
  const numEscolhido = readline.questionInt('Digite um número de 0 a 10: ');

  if (numEscolhido === generatedNumber) {
    return 'Parabéns, número correto!'
  }

  return `Opa, não foi dessa vez. O número era ${generatedNumber}`
};

module.exports = sorteio;
