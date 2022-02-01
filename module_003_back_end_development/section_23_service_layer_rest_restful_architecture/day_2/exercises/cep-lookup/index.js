const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const cepRoute = require('./routes/cepRoute');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!'});
});

app.use('/cep', cepRoute);

app.listen(3000, () => {
  console.log('Running on PORT 3000');
});