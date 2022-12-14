import { Users } from '../types';
import ModelUsers from '../models/ModelsUsers';
import { createToken } from '../auth/validateToken';

const createUsers = async (item: Users): Promise<string> => {
  const result = await ModelUsers.createUsers(item);
  const token = createToken(result);
  return token;
};

export default {
  createUsers,
};