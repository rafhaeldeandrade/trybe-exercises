const { User } = require('../models');

module.exports = async (req, res) => {
  const { payload } = req;
  const { userId } = req.params;

  const findUserById = await User.findOne({ where: { id: userId } });
  console.log(findUserById);
  console.log(payload);
  console.log(findUserById.username === payload.username);

  if (!(findUserById.username === payload.username)) {
    return res.status(401).json({ message: 'Acesso negado' });
  }

  return res.status(200).json(findUserById);
};
