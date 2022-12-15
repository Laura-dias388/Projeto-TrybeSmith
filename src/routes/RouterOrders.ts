import { Router } from 'express';

import ControllersOrders from '../controllers/ControllersOrders';

const router = Router();

router.get('/', ControllersOrders.getAllOrders);

export default router;