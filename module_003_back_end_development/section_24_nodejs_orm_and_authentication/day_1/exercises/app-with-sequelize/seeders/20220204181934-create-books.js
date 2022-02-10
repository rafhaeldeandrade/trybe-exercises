module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Paradoxo Sobre o Comediante',
        author: 'Diderot',
        pageQuantity: 124,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'O Livro do Amigo e do Amado',
        author: 'Lúlio',
        pageQuantity: 74,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Hora de Todos',
        author: 'Quevedo',
        pageQuantity: 159,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Book', null, {});
  },
};
