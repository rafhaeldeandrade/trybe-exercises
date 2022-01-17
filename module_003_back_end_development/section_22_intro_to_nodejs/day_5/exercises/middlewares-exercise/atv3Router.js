const express = require('express');
const router = express.Router();
const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

router.get('/', async (_req, res) => {
  const response = await axios.get(API_URL)

  if (!response.length) return res.status(200).json({ posts: []});

  res.status(200).json({ posts: response });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const response = await axios.get(API_URL);

  const findPost = response.find(p => p.id === parseInt(id, 10));

  if (!id || !findPost) {
    return res.status(404).json({ message: "post not found" });
  }

  res.status(200).json(findPost);
});

module.exports = router;