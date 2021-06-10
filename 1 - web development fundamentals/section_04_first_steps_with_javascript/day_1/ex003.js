/*
3 - Faça um programa que retorne o maior de três números.
Defina no começo do programa três variáveis com os valores que serão comparados.
*/

let valorA = 1;
let valorB = 2;
let valorC = 3;

if (valorA > valorB && valorA > valorC) {
  console.log(valorA);
} else if (valorB > valorA && valorB > valorC) {
  console.log(valorB);
} else {
  console.log(valorC);
}
