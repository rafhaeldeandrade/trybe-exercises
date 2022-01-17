const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const atv1Router = require('./atv1Router');
const atv2Router = require('./atv2Router');
const atv3Router = require('./atv3Router');
const atv4Router = require('./atv4Router');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', atv1Router);

app.use('/btc', atv2Router);

app.use('/posts', atv3Router);

app.use('/teams', atv4Router);

app.all('*', (_req, res) => {
  return res.status(404).json({ message: `Opsss, route not found!`});
});

app.listen(3001, () => console.log('Running server http://localhost:3001'));
