import express from 'express';
import controllers from '../controllers/index.js';
import middlewares from '../middleware/index.js';

const router = express.Router()

router.post('/', 
  controllers.createProduct,
)

router.get('/', 
  middlewares.authToken,
  controllers.listProducts,
)

export default router;