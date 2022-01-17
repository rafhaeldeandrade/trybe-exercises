const express = require('express');
const router = express.Router();
const { emailIsValid, usernameIsValid, passwordIsValid } = require('./atv1Validations');
const { generateToken } = require('./atv1Utils');

router.post('/register', emailIsValid, usernameIsValid, passwordIsValid, (_req, res) => {
  res.status(201).json({ message: 'user created'});
});

router.post('/login', emailIsValid, passwordIsValid, (_req, res) => {
  res.status(200).json({ message: generateToken(12)});
})

module.exports = router;
