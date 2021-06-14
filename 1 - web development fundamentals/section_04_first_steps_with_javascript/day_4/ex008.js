/*
Escreva um programa que defina três números em variáveis e retorne true
se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

console.log(ehPar(4, 5, 7));
console.log(ehPar(5, 6, 8));
console.log(ehPar(5, 5, 3));

function ehPar(a, b, c) {
  if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
