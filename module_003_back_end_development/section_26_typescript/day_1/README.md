# Exercícios Bloco 26 Dia 1

1. Crie um script para converter unidades de medida de comprimento:
    1. Esse script deverá se chamar `length.ts`;
    2. Esse script deverá possuir uma função chamada `convert` que recebe como parâmetro:
        - valor - number;
        - unidade base - string;
        - unidade para a conversão - string

2. Crie um script para converter unidades de medida de massa:
    1. Esse script deverá se chamar `mass.ts`;
    2. Esse script deverá possuir uma função chamada `convert` que recebe como parâmetro:
        - valor - number;
        - unidade base - string;
        - unidade para a conversão - string

3. Crie um script para converter unidades de medida de capacidade:
    1. Esse script deverá se chamar `capacity.ts`;
    2. Esse script deverá possuir uma função chamada `convert` que recebe como parâmetro:
        - valor - number;
        - unidade base - string;
        - unidade para a conversão - string

4. Crie um script para converter unidades de medida de área:
    1. Esse script deverá se chamar `area.ts`;
    2. Esse script deverá possuir uma função chamada `convert` que recebe como parâmetro:
        - valor - number;
        - unidade base - string;
        - unidade para a conversão - string

5. Crie um script para converter unidades de medida de volume:
    1. Esse script deverá se chamar `volume.ts`;
    2. Esse script deverá possuir uma função chamada `convert` que recebe como parâmetro:
        - valor - number;
        - unidade base - string;
        - unidade para a conversão - string

6. Temos um array `characters` que agrupa dados de jogadores em um MMORPG (“Jogo de representação de papéis online, multijogador em massa”) usado para manter o registro de uma guilda (grupo de jogadores) no acompanhamento da evolução do grupo. Esses dados foram adicionados sem se atentar para sua correta tipagem, o que pode ocasionar um bug no futuro. Faça a correta tipagem do array através da tipo `character` e da função usada para imprimir as informações básicas de todos os jogadores.
    ```typescript
    type character = any;

    const characters: any = [
      {
        nickname: 'xKillerx',
        class: 'warrior',
        stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
        createdAt: new Date('2003-10-1')
      },
      {
        nickname: 'jainaProud',
        class: 'mage',
        stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
        createdAt: new Date('2003-10-2')
      },
      {
        nickname: 'catIn',
        class: 'hunter',
        stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
        createdAt: new Date('2003-10-15')
      },
    ]

    function printCharacter(character: any, index: number) {
      const { nickname, class: cls, createdAt } = character;

      console.log(`\n\n===== Character: ${index + 1} ========`);
      console.log(`nickname: ${nickname}
    class: ${cls}
    createdAt: ${createdAt}`);
    }

    characters.forEach(printCharacter);
    ```

7. Vamos tornar nossos scripts mais interativos! Vamos adicionar input de quem usa o script. Para isso utilize o pacote `readline-sync`:
    - Crie em cada script uma função chamada `exec` que:
        1. Pegará as entradas da pessoa usuária via terminal;
        2. Chamará a função de conversão passando as entradas da pessoa usuária como parâmetro;
        3. Exibirá uma mensagem com o resultado. Ex: "1km é igual a 1000m.";
        4. Não se esqueça de chamar a função exec ao final do script. `exec()`;
