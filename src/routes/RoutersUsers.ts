import { Router } from 'express';

import controllerUsers from '../controllers/ControllersUsers';
import { 
  validateUsername,
  validateVocation,
  validateLevel,
  validatePassword,
} from '../middlewares/validateUsers';

const router = Router();

router.post(
  '/',
  validateUsername,
  validateVocation, 
  validateLevel, 
  validatePassword,
  controllerUsers.createUsers,
);

export default router;