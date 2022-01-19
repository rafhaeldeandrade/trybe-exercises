const fs = require('fs').promises;

const promiseAllFunc = async () => {
  const file1 = await fs.readFile('./ex005-1/file1.txt', 'utf-8');
  const file2 = await fs.readFile('./ex005-1/file2.txt', 'utf-8');
  const file3 = await fs.readFile('./ex005-1/file3.txt', 'utf-8');


  const promisesArr = [file1, file2, file3];
  return Promise.all(promisesArr)
  .then(text => console.log(text));
}

const createFilesBasedOnAnArray = () => {
  const arr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  arr.forEach((t, i) => {
    fs.writeFile(`./ex005-2/file${i+1}.txt`, t);
  });
}

const createAFileAll = async () => {
  const strings = [];
  for (let i = 1; i < 6; i+=1) {
    strings.push(await fs.readFile(`./ex005-2/file${i}.txt`, 'utf-8'));
  }

  Promise.all(strings)
    .then(fs.writeFile('./ex005-2/fileAll.txt', strings.join(' ')))
    .catch(console.log);
}

createAFileAll();
