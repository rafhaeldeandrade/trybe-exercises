/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

const paragraphs = document.getElementsByTagName("p");
const mainDiv = document.querySelector(".main-content");
const centeredDiv = document.querySelector(".center-content");
const h1 = document.querySelector(".title");

function changeText(element, description) {
  element.innerText = description;
}

changeText(paragraphs[1], "Lorem Ipsum");

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

changeBackgroundColor(mainDiv, "rgb(76, 164, 109");
changeBackgroundColor(centeredDiv, "white");

changeText(h1, "Exercício 5.1 - JavaScript");

function textTransform(element, property) {
  element.style.textTransform = property;
}

for (let pTag of paragraphs) {
  textTransform(pTag, "uppercase");
  console.log(pTag);
}
