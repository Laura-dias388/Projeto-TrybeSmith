import { Router } from 'express';

import validateTokenC from '../middlewares/validateToken';
import ControllersOrders from '../controllers/ControllersOrders';
import { validateOrders } from '../middlewares/validateOrders';

const router = Router();

router.get('/', ControllersOrders.getAllOrders);
router.post('/',validateTokenC, validateOrders, ControllersOrders.createOrder);

export default router;