const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = async (id) => {
  try {
    if (users[id]) return users[id];
  } catch (err) {
    return new Error(err);
  }
};

const getUserName = async (userID) => findUserById(userID).then((user) => user.name);

module.exports = { findUserById, getUserName };
