const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const bookController = require('./controllers/bookController');

const app = express();
app.use(bodyParser.json());

app.get('/book', rescue(bookController.findAll));
app.get('/book/:id', rescue(bookController.findByPk));
app.post('/book', rescue(bookController.create));
app.put('/book/:id', rescue(bookController.update));
app.delete('/book/:id', rescue(bookController.remove));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port: 3000');
});
