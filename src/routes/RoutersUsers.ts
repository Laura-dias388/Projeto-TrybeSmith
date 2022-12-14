import { Router } from 'express';

import controllerUsers from '../controllers/ControllersUsers';

const router = Router();

router.post('/', controllerUsers.createUsers);

export default router;