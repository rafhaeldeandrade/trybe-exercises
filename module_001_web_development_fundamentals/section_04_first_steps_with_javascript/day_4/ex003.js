/*
Faça um programa que retorne o maior de três números.
Defina no começo do programa três variáveis com os valores que serão comparados.
*/

console.log(maior(1, 2, 3));
console.log(maior(0, 0.2, 0.21));
console.log(maior(-1, -2, -3));

function maior(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
