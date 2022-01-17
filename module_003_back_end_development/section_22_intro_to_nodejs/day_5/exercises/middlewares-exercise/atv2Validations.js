const tokenIsValid = (req, res, next) => {
  const token = req.get('Authorization');
  
  if (!token || !/\w+/.test(token) || token.length !== 12) {
    return res.status(401).json({ message: 'invalid token'});
  }

  next();
}

module.exports = { tokenIsValid };
