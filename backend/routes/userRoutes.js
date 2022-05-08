import express from 'express';
import controllers from'../controllers/index.js';

const router = express.Router()

router.post('/', 
  controllers.createUser,
)

export default router;