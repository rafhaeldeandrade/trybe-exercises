/*
Faça um programa que defina três variáveis com os valores dos três ângulos
internos de um triângulo. Retorne true se os ângulos representarem os ângulos de
um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve
retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.
*/

console.log(triangulo(5, 50, 80));
console.log(triangulo(30, 30, 120));
console.log(triangulo(0, 5, 120));

function triangulo(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "os valores dos ângulos devem ser positivos";
  } else if (a + b + c === 180) {
    return true;
  } else {
    return false;
  }
}
