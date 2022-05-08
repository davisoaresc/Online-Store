const router = require('express').Router();
const controllers = require('../controllers');

router.post('/', 
  controllers.createUser,
)

module.exports = router;