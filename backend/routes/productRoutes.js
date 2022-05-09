const express = require('express');

const controllers = require('../controllers');
const middlewares = require('../middlewares'); 

const router = express.Router()

router.post('/', 
  controllers.createProduct,
)

router.get('/', 
  middlewares.authToken,
  controllers.listProducts,
)

module.exports = router;