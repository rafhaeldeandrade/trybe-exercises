const exercisePromise = require('./ex001');

const randomNum = () => {
  return Math.floor(Math.random() * 100 + 1);
}

exercisePromise(randomNum(), randomNum(), randomNum())
  .then(console.log)
  .catch(console.log);

module.exports = randomNum;