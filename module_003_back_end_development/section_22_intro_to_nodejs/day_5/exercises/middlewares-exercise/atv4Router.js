const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const { nameIsValid, initialsIsValid, countryIsValid } = require('./atv4Validations');

router.post('/', nameIsValid, initialsIsValid, countryIsValid, async (req, res) => {
  const { name, initials, country, league } = req.body;
  const teams = await fs.readFile('./teams.json', 'utf-8');

  const teamBaseObj = { name, initials, country };

  if (!league) {
    teams.push(teamBaseObj)
    await fs.writeFile('./teams.json', teams);
    return res.status(201).json(teamBaseObj);
  }

  teams.push({ ...teamBaseObj, league });
  await fs.writeFile('./teams.json', teams);
  return res.status(201).json({ ...teamBaseObj, league });
});

router.get('/', async (_req, res) => {
  const teams = await fs.readFile('./teams.json', 'utf-8');

  if (teams.length < 1) return res.status(200).json([]);

  res.status(200).json(teams);
});
