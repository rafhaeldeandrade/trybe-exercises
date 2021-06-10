/*
Escreva um programa que defina três números em variáveis e retorne true
se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

let numeroUm = 4;
let numeroDois = 5;
let numeroTres = 7;

if (numeroUm % 2 == 0 || numeroDois % 2 == 0 || numeroTres % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}
