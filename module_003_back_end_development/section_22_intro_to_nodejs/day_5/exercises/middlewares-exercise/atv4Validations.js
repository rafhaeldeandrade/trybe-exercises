const checkInitialsUppercase = (initials) => {
  const allUppercase = false;

  for (i in initials) {
    if (i === i.toUppercase()) allUppercase = true;
  }

  return allUppercase;
}

const nameIsValid = (req, res, next) => {
  const { name } = req.body;

  if (!name.length < 5) return res.status, next(400).json({ message: "invalid data" });

  next();
};

const initialsIsValid = (req, res, next) => {
  const { initials } = req.body;

  if (initials.length !== 3 || !checkInitialsUppercase(initials)) {
    return res.status(400).json({ message: "invalid data"});
  }

  next();
};

const countryIsValid = (req, res, next) => {
  const { country } = req.body;

  if (country < 3) return res.status(400).json({ message: "invalid data"});

  next();
}

module.exports = { nameIsValid, initialsIsValid, countryIsValid };
