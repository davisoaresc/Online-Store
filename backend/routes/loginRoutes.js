const express = require('express');

const controllers = require('../controllers');
const middlewares = require('../middlewares'); 

const router = express.Router()

router.post('/', 
  middlewares.loginValidate,
  controllers.login,
)

module.exports = router;