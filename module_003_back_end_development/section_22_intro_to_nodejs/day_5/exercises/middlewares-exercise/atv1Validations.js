const msgInvalidData = { message: 'invalid data'};

// https://stackoverflow.com/a/46181
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

const emailIsValid = (req, res, next) => {
  const { email } = req.body;

  if (!email || !validateEmail(email)) return res.status(400).json(msgInvalidData);
  next();
};

const usernameIsValid = (req, res, next) => {
  const { username } = req.body;

  if (!username || username.length < 3) return res.status(400).json(msgInvalidData);
  next();
};

const passwordIsValid = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length < 4 || password.length > 8 || !password.match(/^[0-9]*$/)) {
    return res.status(400).json(msgInvalidData)
  }
  next();
}

module.exports = { emailIsValid, usernameIsValid, passwordIsValid };
