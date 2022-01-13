const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const fsUtils = require('./simpsons-utils');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong'});
});

app.post('/hello', (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(422).json({ error: true, message: 'name is missing'});

  res.status(201).json({ message: `Hello, ${name}`});
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) return res.status(422).json({ error: true, message: 'name or age are missing'});

  if (age > 17) return res.status(200).json({ message: `Hello, ${name}`});

  res.status(401).json({ message: 'Unauthorized'});
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});

app.get('/simpsons', async (_req, res) => {
  res.status(200).json(await fsUtils.readSimpsons());
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;

  const simpsons = await fsUtils.readSimpsons();

  const idExists = simpsons.find(s => s.id === id);

  if (!idExists) return res.status(404).json({ message: 'simpson not found'});

  res.status(200).json(idExists);
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;

  const simpsons = await fsUtils.readSimpsons();

  const idExists = simpsons.find(s => s.id === id);

  if (idExists) return res.status(409).json({ message: 'id already exists' });

  simpsons.push({ id, name });
  fsUtils.writeSimpsons(simpsons);
  res.status(204).end();
});

app.listen(3002, () => console.log('Rodando na porta 3002'));
