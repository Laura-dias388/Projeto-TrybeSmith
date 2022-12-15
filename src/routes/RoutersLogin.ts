import { Router } from 'express';

import ControllersLogin from '../controllers/ControllersLogin';
import newValidateLogin from '../middlewares/validateLogin';

const router = Router();

router.post('/', newValidateLogin.validateLogin, ControllersLogin.createLogin);

export default router;