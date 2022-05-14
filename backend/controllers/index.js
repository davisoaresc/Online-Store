const { createUser, listUsersByUserName, updateUserCoins, userBuyingCoins } = require('./user');
const { createProduct, listProducts } = require('./product');
const login  = require('./login');

module.exports = {
  createUser,
  listUsersByUserName,
  updateUserCoins,
  userBuyingCoins,
  createProduct,
  listProducts,
  login,
};
