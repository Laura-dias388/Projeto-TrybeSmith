import { Request, Response } from 'express';
import ServiceOrders from '../services/ServicesOrders';

const getAllOrders = async (_req: Request, res: Response) => {
  const result = await ServiceOrders.getAllOrders();
  if (!result) {
    return res.status(404).json({ message: 'Not found' });
  }
  return res.status(200).json({ token: result });
};

export default {
  getAllOrders,
};