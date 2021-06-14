/*
Escreva um programa que defina três números em variáveis e retorne
true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

console.log(ehImpar(4, 2, 7));
console.log(ehImpar(5, 5, 5));
console.log(ehImpar(2, 4, 6));

function ehImpar(a, b, c) {
  if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
