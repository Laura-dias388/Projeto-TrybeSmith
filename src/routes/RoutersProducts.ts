import { Router } from 'express';

import ControllersProducts from '../controllers/ControllersProducts';
import { validateName, validationAmount } from '../middlewares/validateProducts';

const router = Router();

router.post('/', validateName, validationAmount, ControllersProducts.createProducts);
router.get('/', ControllersProducts.getAllProducts);

export default router;