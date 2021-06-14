/*
4 -Faça um programa que, dado um valor definido numa variável, retorne
"positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/

console.log(positiveOrNegative(5));
console.log(positiveOrNegative(0));
console.log(positiveOrNegative(-2));

function positiveOrNegative(num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
