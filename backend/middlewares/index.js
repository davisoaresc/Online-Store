const errorHandle = require('./errorHandle');
const loginValidate = require('./loginValidate');
const authToken = require('./authToken');

const middleware = {
  errorHandle,
  loginValidate,
  authToken,
};

module.exports = middleware;
