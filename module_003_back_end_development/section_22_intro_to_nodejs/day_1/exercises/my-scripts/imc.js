const readline = require('readline-sync');

const calculaImc = () => {
  const peso = readline.questionFloat('Qual o seu peso? ');
  const altura = readline.questionFloat('Qual a sua altura, em metros? ');

  const imc = peso / (altura ** 2);

  if (imc < 18.5) {
    return `Seu IMC é ${imc} e você está abaixo do peso (magreza)`
  } else if (imc < 25) {
    return `Seu IMC é ${imc} e você está com peso normal`
  } else if (imc < 30) {
    return `Seu IMC é ${imc} e você está acima do peso (sobrepeso)`
  } else if (imc < 35) {
    return `Seu IMC é ${imc} e você está com obesidade grau I`
  } else if (imc < 40) {
    return `Seu IMC é ${imc} e você está com obesidade grau II`
  } else {
    return `Seu IMC é ${imc} e você está com obesidade grau III ou IV`
  }
}

module.exports = calculaImc;
