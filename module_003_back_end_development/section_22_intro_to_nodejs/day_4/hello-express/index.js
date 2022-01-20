const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // 1
app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/hello', handleHelloWorldRequest); // 2

app.get('/recipes', (_req, res) => {
  recipes.sort((a, b) => (a.name).localeCompare(b.name));
  res.status(200).json(recipes);
});

app.post('/recipes', (req, res) => {
  const { name, price, waitTime } = req.body;

  if (!name || !price || !waitTime) return res.status(422).json({ message: 'name, price or waitTime is missing'});

  const newId = recipes[recipes.length - 1].id + 1;

  const newRecipe = {
    id: newId,
    name,
    price,
    waitTime,
  }

  res.status(201).json(newRecipe);
})

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes
    .filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice) && r.price >= minPrice);
  res.status(200).json(filteredRecipes);
})

app.get('/drinks', (_req, res) => {
  drinks.sort((a, b) => (a.name).localeCompare(b.name));
  res.status(200).json(drinks);
});

app.post('/drinks', (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) return res.status(422).json({ message: 'name or price is missing'});

  const newId = drinks[drinks.length - 1].id + 1;

  const newDrink = {
    id: newId,
    name,
    price,
  }

  drinks.push(newDrink);

  res.status(201).json(newDrink);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find(r => r.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'drink not found'});

  res.status(200).json(drink);
});

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;

  const filteredDrink = drinks.filter(d => d.name.includes(name));

  res.status(200).json(filteredDrink);
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(_req, res) {
  res.status(200).send('Hello World!'); // 4
}

