const movieService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await movieService.create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  return res.status(201).json({ message: 'Filme criado com sucesso!' });
};

const findById = async (req, res) => {
  const { id } = req.params;

  const movie = await movieService.findById({ id });

  if (!movie.length)
    return res.status(404).json({ message: 'Filme não encontrado' });

  return res.status(200).json(movie);
};

module.exports = {
  create,
  findById,
};
