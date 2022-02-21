const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.admin) {
      return res.status(403).json({
        error: {
          message: 'Restricted access',
        },
      });
    }

    return next();
  } catch (e) {
    return res.status(401).json({ error: { message: e.message } });
  }
};
