const express = require('express');
const rescue = require('express-rescue');
const productsService = require('../services/productsService');

const router = express.Router();

router.get(
  '/',
  rescue(async (_req, res) => {
    const products = await productsService.getAll();

    res.status(200).json(products);
  }),
);

router.get(
  '/:id',
  rescue(async (req, res) => {
    const product = await productsService.getById(req.params.id);

    res.status(200).json(product);
  }),
);

router.post(
  '/',
  rescue(async (req, res) => {
    const { name, brand } = req.body;

    const newProduct = await productsService.add(name, brand);

    res.status(201).json(newProduct);
  }),
);

router.delete(
  '/:id',
  rescue(async (req, res) => {
    const products = await productsService.exclude(req.params.id);

    res.status(200).send(products);
  }),
);

router.put(
  '/:id',
  rescue(async (req, res) => {
    const { name, brand } = req.body;

    const products = await productsService.update(req.params.id, name, brand);

    res.status(200).send(products);
  }),
);

module.exports = router;
