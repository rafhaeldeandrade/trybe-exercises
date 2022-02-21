const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(400)
      .json({ message: 'Token não encontrado ou informado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.payload = decoded;
    return next();
  } catch (e) {
    return res.status(401).json({ error: { message: e.message } });
  }
};
