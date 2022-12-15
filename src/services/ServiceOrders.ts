import ModelsOrders from '../models/ModelsOrders';
import { Orders } from '../types';

const getAllOrders = async (): Promise<Orders[]> => {
  const result = await ModelsOrders.getAllOrders();
  if (!result) {
    return [];
  }
  return result;
};

export default {
  getAllOrders,
};