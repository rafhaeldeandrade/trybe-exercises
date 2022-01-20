const Author = require('../models/Author');

const validateTitle = (req, res, next) => {
  const { title } = req.body;

  if (!title) return res.status(400).json({ message: 'Dados inválidos' });
  if (title.length < 3) return res.status(400).json({ message: 'Dados inválidos' });

  next();
};

const validateAuthorId = async (req, res, next) => {
  const { author_id } = req.body;

  if (!author_id) return res.status(400).json({ message: 'Dados inválidos' });
  
  const authorExists = await Author.getById(author_id);

  if (!authorExists) return res.status(400).json({ message: 'Dados inválidos' });

  next();
}

module.exports = { validateTitle, validateAuthorId }