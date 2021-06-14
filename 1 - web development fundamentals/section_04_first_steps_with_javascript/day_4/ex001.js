console.log(sum(4, 5));
console.log(sum(0, 3));

function sum(a, b) {
  return a + b;
}

console.log(sub(4, 5));
console.log(sub(0, 0));

function sub(a, b) {
  return a - b;
}

console.log(mult(4, 5));
console.log(mult(0, 0));

function mult(a, b) {
  return a * b;
}

console.log(division(10, 2));
console.log(division(5, 0));
function division(a, b) {
  if (b === 0) {
    return "O segundo valor tem que ser diferente de 0.";
  } else {
    return a / b;
  }
}

console.log(division(10, 2));
console.log(division(5, 0));

function modulo(a, b) {
  if (b === 0) {
    return "O segundo valor tem que ser diferente de 0.";
  }
  return a % b;
}
