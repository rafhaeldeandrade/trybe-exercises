/*
2 -Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número
aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa
se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string
(Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

const gerador = (numApostado, check) => {
  let numGerado = () => {
    let min = Math.ceil(1);
    let max = Math.floor(5);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return check(numApostado, numGerado());
}

const check = (numApostado, numGerado) => {
  return numApostado === numGerado ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(gerador(2, check));