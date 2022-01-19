const readline = require('readline');
const fs = require('fs/promises');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

let data = '';
let replace = '';
let word = '';

rl.question('Which file do you want to open?: ', async (file) => {
  try {
    data = await fs.readFile(`./${file}`, 'utf-8');
    rl.question('Which word do you wanna replace?: ', (wordToReplace) => {
      replace = wordToReplace;
      rl.question("Which is the new word?: ", (newWord) => {
        word = newWord;
        data.replace(new RegExp(replace, 'g'), word);
        console.log(data);

        rl.question('In which file do you want to save?: ', (newFile) => {
          fs.writeFile(`./${newFile}`, JSON.stringify(data));
          rl.close();
        });
      });
    });
  } catch (error) {
    throw new Error(error);
  }
});

