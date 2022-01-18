const readline = require('readline-sync');
const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');

const scripts = [imc, velocidade, sorteio];

const whichScript = readline.keyInSelect(scripts);
console.log(scripts[whichScript]());
