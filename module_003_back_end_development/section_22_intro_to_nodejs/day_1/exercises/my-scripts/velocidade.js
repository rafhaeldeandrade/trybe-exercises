const readline = require('readline-sync');

const calculaVelocidadeMedia = () => {
  const distancia = readline.questionInt('Digite a distância em metros: ');
  const tempo = readline.questionInt('Digite o tempo em segundos: ');

  return `Velocidade média: ${distancia/tempo} m/s.`
}

module.exports = calculaVelocidadeMedia;
