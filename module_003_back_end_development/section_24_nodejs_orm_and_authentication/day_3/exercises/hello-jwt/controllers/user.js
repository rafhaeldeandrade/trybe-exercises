module.exports = (req, res) => {
  const { payload } = req;
  return res
    .status(200)
    .json({ username: payload.username, admin: payload.admin });
};
