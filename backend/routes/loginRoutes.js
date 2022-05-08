import express from 'express';

import controllers from '../controllers/index.js';
import middlewares from '../middleware/index.js';

const router = express.Router()

router.post('/', 
  middlewares.loginValidate,
  controllers.login,
)

export default router;