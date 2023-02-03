import ModelsOrders from '../models/ModelsOrders';
import { Orders } from '../types';

const getAllOrders = async (): Promise<Orders[]> => {
  const result = await ModelsOrders.getAllOrders();
  if (!result) {
    return [];
  }
  return result;
};

const createOrder = async (order: Orders) => {
  const affectedRows = await ModelsOrders.createOrder(order);
  if (affectedRows < 1) return { type: 'error', message: 'Cannot insert Orders' };
  return { type: null, message: order };
};

export default {
  getAllOrders,
  createOrder,
};