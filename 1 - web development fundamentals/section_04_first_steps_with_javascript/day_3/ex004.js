/*
Por fim, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
*****
*/
let n = 5;
let symbol = "*";
let mid = (n + 1) / 2;
let left = mid;
let right = mid;
let inputLine = "";

for (let linha = 0; linha <= mid; linha += 1) {
  for (let coluna = 0; coluna <= n; coluna += 1) {
    if (coluna > left && coluna < right) {
      inputLine += symbol;
    } else {
      inputLine += " ";
    }
  }
  console.log(inputLine);
  inputLine = "";
  left -= 1;
  right += 1;
}
