import { Users } from '../types';
import { createToken } from '../auth/validateToken';
import ModelsLogin from '../models/ModelsLogin';

const createLogin = async ({ username, password }: Users) => {
  const result = await ModelsLogin.createLogin(username);
  if (!result) {
    return { type: 'error', message: 'Username or password invalid' };
  }
  if (result.username !== username || result.password !== password) {
    return { type: 'error', message: 'Username or password invalid' };
  }
  const token = createToken(result as Users);
  return { type: null, message: token };
};

export default {
  createLogin,
};

// Requisito desenvolvido com ajuda de Luídi Pires T-23 Tribo A;