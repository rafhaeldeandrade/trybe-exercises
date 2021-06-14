/*3- Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****
*/
let n = 5;
let inputLine = "";
let simbolo = "*";
let inputPosition = n;

for (let line = 0; line < n; line += 1) {
  for (let coluna = 0; coluna <= n; coluna += 1) {
    if (coluna < inputPosition) {
      inputLine += " ";
    } else {
      inputLine += simbolo;
    }
  }
  console.log(inputLine);
  inputLine = "";
  inputPosition -= 1;
}
