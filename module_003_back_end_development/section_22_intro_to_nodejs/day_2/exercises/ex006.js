const readline = require('readline');
const fs = require('fs/promises');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Which file do you want to open?: ', (file) => {
  // TODO: Log the answer in a database
  fs.readFile(`./${file}`, 'utf-8')
    .then(console.log)
    .catch(console.log('Arquivo inexistente'));

  rl.close();
});
