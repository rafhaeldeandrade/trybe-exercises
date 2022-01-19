const {exercisePromise} = require('./ex001');
const randomNum = require('./ex002');

const main = async () => {
  return await exercisePromise(randomNum(), randomNum(), randomNum());
}

main()
  .then(console.log);
