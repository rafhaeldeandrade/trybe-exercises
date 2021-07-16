const fetch = require('node-fetch');

const fetchDogos = (url) => new Promise((resolve, reject) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) return reject(new Error());
      return response.json();
    })
    .then((data) => resolve(data.message));
});

module.exports = { fetchDogos };
