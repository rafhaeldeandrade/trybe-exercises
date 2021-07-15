const { getAnimal } = require('./ex_006');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', async () => {
      const data = await getAnimal('Dorminhoco', 'name');
      expect(data).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', async () => {
      try {
        await getAnimal('Bob', 'name');
      } catch (err) {
        expect(err).toEqual(new Error('Nenhum animal com esse nome!'));
      }
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne a arr com animal/animais', async () => {
      const data = await getAnimal(1, 'age');
      expect(data).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', async () => {
      try {
        await getAnimal(9, 'age');
      } catch (err) {
        expect(err).toEqual(new Error('Nenhum animal com essa idade!'));
      }
    });
  });
});