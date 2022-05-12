const { createUser, listUsersByUserName } = require('./user');
const { createProduct, listProducts } = require('./product');
const login  = require('./login');

module.exports = {
  createUser,
  listUsersByUserName,
  createProduct,
  listProducts,
  login,
};
