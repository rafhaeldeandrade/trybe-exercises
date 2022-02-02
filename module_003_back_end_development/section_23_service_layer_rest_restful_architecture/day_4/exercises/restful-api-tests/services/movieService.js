const movieModel = require('../models/movieModel');

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await movieModel.create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const findById = async ({ id }) => {
  const result = await movieModel.findById({ id });

  return result;
};

module.exports = {
  create,
  findById,
};
