let numbers = [5, 3, 2, 4, 7, 1, 0, 6];

//1 - Ordene o numbers numbers em ordem crescente e imprima seus valores;

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

//2 - Ordene o numbers numbers em ordem decrescente e imprima seus valores;

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

/* 3
Agora crie um novo array a partir do array numbers, sem perdê-lo.
Cada valor do novo array deverá ser igual ao valor correspondente no array
numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array
deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte).
Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor)
e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá
ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
[
  15, 6, 8, 28,
   7, 0, 0, 12
]
*/

let numbersArray = [5, 3, 2, 4, 7, 1, 0, 6];
let numbersNew = [];

for (let index = 0; index < numbersArray.length; index += 1) {
  if (index + 1 === numbersArray.length) {
    numbersNew.push(numbersArray[index] * 2);
  } else {
    numbersNew.push(numbersArray[index] * numbersArray[index + 1]);
  }
}

console.log(numbersNew);
