const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const Book = require('./models/Book');
const { validateTitle, validateAuthorId } = require('./validations/post-books-validations');

const app = express();
app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const books = await Book.getById(id);

  if (!books) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(books);
});

app.post('/books', validateTitle, validateAuthorId, async (req, res) => {
  const { title, author_id } = req.body;

  await Book.create(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso! '});
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  if (author_id) {
    const books = await Book.getByAuthorId(author_id);

    if (!books) return res.status(404).json({ message: `Não existe nenhum livro escrito por alguém com o id: ${author_id}`});

    return res.status(200).json(books);
  }

  const books = await Book.getAll();

  res.status(200).json(books);
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
