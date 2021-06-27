/*
2 - Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas variáveis com os valores que serão comparados
*/

console.log(maior(1, 5));
console.log(maior(22, 2));
console.log(maior(-5, -4));

function maior(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
