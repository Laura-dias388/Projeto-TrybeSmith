import { Router } from 'express';

import ControllersProducts from '../controllers/ControllersProducts';

const router = Router();

router.post('/', ControllersProducts.createProducts);
router.get('/', ControllersProducts.getAllProducts);

export default router;