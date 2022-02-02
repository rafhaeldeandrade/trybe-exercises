const express = require('express');
const bodyParser = require('body-parser');

const movieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.post('/movies', movieController.create);

app.get('/movies/:id', movieController.findById);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Ouvindo a porta ${PORT}`);
});
