const productsModel = require('../models/productsModel');

// add() returns an object: { id: insertId, name: productName, brand: brandName }
const add = async (name, brand) => {
  const result = await productsModel.add(name, brand);

  return result;
};

// getAll() returns an empty array [] or an array with objects, if they exist
const getAll = async () => {
  const result = await productsModel.getAll();

  return result;
};

// getById() throws an error if there's no product with the id or an array with the object,
// if it exists
const getById = async (id) => {
  const result = await productsModel.getById(id);

  if (!result) {
    const error = { code: 'notFound', message: 'Product not found' };
    throw error;
  }

  return result;
};

const update = async (id, name, brand) => {
  const result = await productsModel.update(id, name, brand);

  return result;
};

const exclude = async (id) => {
  const productExists = await productsModel.getById(id);

  await productsModel.exclude(id);

  return productExists;
};

module.exports = { add, getAll, getById, update, exclude };
