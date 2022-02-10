const { Book } = require('../models');

const findAll = async () => {
  const result = await Book.findAll();

  return result.map((b) => b.dataValues);
};

const findByPk = async (id) => {
  const result = await Book.findByPk(id);

  if (!result) return [];

  return [result];
};

const create = async ({ title, author, pageQuantity }) => {
  const result = await Book.create({ title, author, pageQuantity });

  return result;
};

const update = async ({ id, title, author, pageQuantity }) => {
  const result = await Book.findByPk(id);

  if (!result) return null;

  result.title = title;
  result.author = author;
  result.pageQuantity = pageQuantity;

  return result.save();
};

const remove = async ({ id }) => {
  const result = await Book.destroy({ where: { id } });

  return result;
};

module.exports = { findAll, findByPk, create, update, remove };
