const express = require('express');
const bodyParser = require('body-parser');
const productsController = require('./controllers/productsController');
const domainErrorController = require('./controllers/domainErrorController');

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productsController);

app.use(domainErrorController);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('App listening on port 3000!');
});
