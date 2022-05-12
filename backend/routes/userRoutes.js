const express = require('express');

const router = express.Router()

const controllers = require('../controllers');
const middlewares = require('../middlewares');

router.post('/', 
  controllers.createUser,
)

router.get('/:usuario', 
  controllers.listUsersByUserName,
)

module.exports = router;