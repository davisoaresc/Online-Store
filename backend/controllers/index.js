const createUser = require('./user');
const { createProduct, listProducts } = require('./product');
const login  = require('./login');

module.exports = {
  createUser,
  createProduct,
  listProducts,
  login,
};
