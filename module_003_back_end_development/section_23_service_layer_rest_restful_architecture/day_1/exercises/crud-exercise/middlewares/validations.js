const validateFirstName = (req, res, next) => {
  const { firstName } = req.body;

  if (!firstName) return res.status(400).json(
    {
      "error": true,
      "message": "O campo 'firstName' está vazio"
  });

  next();
}

const validateLastName = (req, res, next) => {
  const { lastName } = req.body;

  if (!lastName) return res.status(400).json(
    {
      "error": true,
      "message": "O campo 'lastName' está vazio"
  });

  next();
}

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email) return res.status(400).json(
    {
      "error": true,
      "message": "O campo 'email' está vazio"
  });

  next();
}

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) return res.status(400).json(
    {
      error: true,
      message: "O campo 'password' está vazio"
    }
  );

  if (password.length < 6) return res.status(400).json(
    {
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres"
    }
  );

  next();
}

module.exports = {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
}