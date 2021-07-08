// // apiScript.js

// async function fetchJoke() {
//   const API_URL = 'https://icanhazdadjoke.com/';
//   const myObject = {
//     method: 'GET',
//     headers: { Accept: 'application/json' },
//   };

//   return fetch(API_URL, myObject)
//     .then((response) => response.json())
//     .then((data) => data.joke);
// }

// async function insereNoDom() {
//   const jokeContainer = document.querySelector('#jokeContainer');
//   await fetchJoke()
//     .then((piada) => { (jokeContainer.innerText = piada); })
//     .catch((err) => err);
// }

// insereNoDom();

function getRandomInt(min, max) {
  this.min = Math.ceil(min);
  this.max = Math.floor(max);
  return Math.floor(Math.random() * (this.max - this.min)) + this.min;
}

function promiseEx() {
  return new Promise((resolve, reject) => {
    const number = getRandomInt(1, 50);
    const array = [];
    for (let i = 0; i < 50; i += 1) {
      array.push(number);
    }
    const aoQuadrado = array.map((num) => num ** 2);
    const checkNum = aoQuadrado.reduce((acc, curr) => acc += curr, 0);
    const divisores = [2, 3, 5, 10];
    if (checkNum > 8000) {
      reject(new Error('É mais de oito mil! Essa promise deve estar quebrada!'));
      return;
    }
    const resultadoFinal = divisores.map((num) => checkNum / num);
    resolve(resultadoFinal);
});
}

const somaArray = (array) => new Promise((resolve) => {
  resolve(array.reduce((acc, curr) => acc += curr));
});

promiseEx()
  .then((array) => array)
  .then((array) => somaArray(array))
  .then((soma) => console.log(`Soma: ${soma}`))
  .catch((err) => console.log(err));
