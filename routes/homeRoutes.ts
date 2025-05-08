import express from 'express';

const router = express.Router();

// Controllers
import { homeController } from '../controllers/homeControllers';

router.get('/', homeController);

export { router };