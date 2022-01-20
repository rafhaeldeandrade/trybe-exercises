const express = require('express');
const bodyParser = require('body-parser');
const { validateFirstName, validateLastName, validateEmail, validatePassword } = require('./middlewares/validations');
const User = require('./models/User');

const app = express();
app.use(bodyParser.json());

app.post('/user',
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
   async (req, res) => {
    const { firstName, lastName, password, email } = req.body;

    const user = await User.create(firstName, lastName, password, email);

    if (!user) return res.status(500).json({ message: 'usuário não foi criado'});

    res.status(201).json(user);
  });

app.put('/user/:id',
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  async (req, res) => {
    const { firstName, lastName, password, email } = req.body;

    const user = await User.update(firstName, lastName, password, email);

    if (!user) return res.status(404).json({ error: true, message: 'Usuário não encontrado'})

    res.status(200).json(user);
  });
  
app.get('/user/:id'), async (req, res) => {
  const { id } = req.params;

  const user = await User.getById(id);

  if (!user) return res.status(404).json({ error: true, message: 'Usuário não encontrado'});

  res.status(200).json(user);
};

app.get('/user', async (_req, res) => {
  const users = await User.getAll();

  res.status(200).json(users);
});
