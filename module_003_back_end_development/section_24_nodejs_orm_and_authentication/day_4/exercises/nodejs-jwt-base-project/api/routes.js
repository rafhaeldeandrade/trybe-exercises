const getPosts = require('../controllers/posts');
const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');
const getUsers = require('../controllers/getUsers');
const getUserInfo = require('../controllers/getUserInfo');
const auth = require('../controllers/auth');

module.exports = {
  getPosts,
  createUsers,
  getUsers,
  login,
  getUserInfo,
  auth,
};
