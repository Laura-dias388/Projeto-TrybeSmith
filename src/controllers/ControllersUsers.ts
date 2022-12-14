import { Request, Response } from 'express';
import ServicesUsers from '../services/ServicesUsers';

const createUsers = async (req: Request, res: Response) => {
  const itens = req.body;
  const result = await ServicesUsers.createUsers(itens);
  return res.status(201).json({ token: result });
};

export default {
  createUsers,
};

// Ajuda de Luídi Pires T-23 Tribo A;