const bookService = require('../services/bookService');

const findAll = async (req, res) => {
  const result = await bookService.findAll();

  if (!result) return res.status(500).json({ message: 'Algo deu errado' });

  return res.status(200).json(result);
};

const findByPk = async (req, res) => {
  const { id } = req.params;
  const result = await bookService.findByPk(id);

  if (!result.length)
    return res.status(500).json({ message: 'Algo deu errado' });

  return res.status(200).json(result);
};

const create = async (req, res) => {
  const result = await bookService.create(req.body);

  if (!result) return res.status(500).json({ message: 'Algo deu errado' });

  return res.status(200).json(result);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const result = await bookService.update({ id, title, author, pageQuantity });

  if (!result) return res.status(500).json({ message: 'Algo deu errado' });

  return res.status(200).json(result);
};

const remove = async (req, res) => {
  const { id } = req.params;

  const result = await bookService.remove({ id });
  if (!result) return res.status(500).json({ message: 'Algo deu errado' });

  return res.status(200).json(result);
}

module.exports = { findAll, findByPk, create, update, remove };
