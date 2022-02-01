const errorMap = {
  notFound: 404,
};

module.exports = (err, _req, res, _next) => {
  const status = errorMap[err.code];
  if (!status) {
    return res
      .status(500)
      .json({ error: true, message: 'internal server error' });
  }
  return res.status(status).json({ error: true, message: err.message });
};
