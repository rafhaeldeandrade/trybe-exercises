// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Banana', 'Melão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Groselha', 'Paçoca', 'Leite em pó'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));