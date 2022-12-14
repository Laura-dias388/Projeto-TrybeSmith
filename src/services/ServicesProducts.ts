import { Product } from '../types';
import ModelProducts from '../models/ModelsProducts';

const createProducts = async (item: Product): Promise<Product> => {
  const result = await ModelProducts.createProducts(item);
  return result;
};

const getAllProducts = async (): Promise<Product[]> => {
  const result = await ModelProducts.getAllProducts();
  return result;
};

export default {
  createProducts,
  getAllProducts,
};