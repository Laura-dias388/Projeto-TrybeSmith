import { Router } from 'express';

import ControllersProducts from '../controllers/ControllersProducts';

const router = Router();

router.post('/', ControllersProducts.createProducts);

export default router;