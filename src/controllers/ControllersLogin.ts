import { Request, Response } from 'express';
import ServiceLogin from '../services/ServicesLogin';

const createLogin = async (req: Request, res: Response) => {
  const item = req.body;
  const { type, message } = await ServiceLogin.createLogin(item);
  if (type) {
    return res.status(401).json({ message });
  }
  return res.status(200).json({ token: message });
};

export default {
  createLogin,
};
