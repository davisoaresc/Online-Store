import errorHandle from "./errorHandle.js";
import loginValidate from "./loginValidate.js";
import authToken from "./authToken.js";

const middleware = {
  errorHandle,
  loginValidate,
  authToken,
};

export default middleware;
