const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// console.log(battleMembers);
/*
1 - Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
2 - Crie uma função que retorna o dano causado pelo warrior .
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15
de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
*/

const calculaDano = (minimum, maximum) => {
  let min = Math.ceil(minimum);
  let max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const damageDragon = dragon => calculaDano(15, dragon.strength);

const damageWarrior = warrior => calculaDano(warrior.strength, warrior.strength * warrior.weaponDmg);

const damageMage = mage => {
  if (mage.mana >= 15) {
    return { dano: calculaDano(mage.intelligence, mage.intelligence * 2), manaGasta: 15 };
  } else {
    return { dano: 'Não possui mana suficiente', manaGasta: 0 }
  }
};

/*
Parte II
Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as
como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações
do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
Copie o código abaixo e inicie sua implementação:
1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior .
Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints
do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage
. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints
 do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon.
Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints
dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado
e faça um console.log para visualizar o resultado final do turno.
*/

const battleMembersObjKeys = Object.keys(battleMembers);

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (fn) => {
    const damageDealt = fn(warrior);
    dragon.healthPoints -= damageDealt;
    warrior.damage = damageDealt;
    console.log(`O warrior deu ${damageDealt} de dano no Dragão!`)
  },

  mageTurn: (fn) => {
    const exec = fn(mage);
    const damageDealt = exec.dano;
    const manaSpent = exec.manaGasta;
    dragon.healthPoints -= damageDealt;
    mage.damage = damageDealt;
    mage.mana -= manaSpent;
    console.log(`O mage deu ${damageDealt} de dano no Dragão e gastou ${manaSpent} de mana!`)
  },

  dragonTurn: (fn) => {
    const damageDealt = fn(dragon);
    warrior.healthPoints -= damageDealt;
    mage.healthPoints -= damageDealt;
    dragon.damage = damageDealt;
    console.log(`O dragão deu ${damageDealt} de dano no warrior e no mage!`)
  },

  battleMembersAtualizado: () => {
    battleMembersObjKeys.forEach((char) => {
      if (battleMembers[char].hp <= 0) {
        delete battleMembers[char]
      }
    });
    return console.log(battleMembers);
  }
};

gameActions.warriorTurn(damageWarrior);
gameActions.mageTurn(damageMage);
gameActions.dragonTurn(damageDragon);
gameActions.battleMembersAtualizado();
