import { Request, Response } from 'express';
import ServiceOrders from '../services/ServicesOrders';

const getAllOrders = async (_req: Request, res: Response) => {
  const result = await ServiceOrders.getAllOrders();
  if (!result) {
    return res.status(404).json({ message: 'Not found' });
  }
  return res.status(200).json(result);
};

const createOrder = async (req: Request, res: Response) => {
  const { productsIds, user: { data: { id: userId } } } = req.body;
  const { type, message } = await ServiceOrders.createOrder({ userId, productsIds });
  if (type) return res.status(400).json({ message });
  return res.status(201).json(message);
};

export default {
  getAllOrders,
  createOrder,
};