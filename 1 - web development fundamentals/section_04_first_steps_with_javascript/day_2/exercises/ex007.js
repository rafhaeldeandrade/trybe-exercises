// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (let numero of numbers) {
  if (numero < menor) {
    menor = numero;
  }
}

console.log(menor);
