import { Product } from '../types';
import ModelProducts from '../models/ModelsProducts';

const createProducts = async (item: Product): Promise<Product> => {
  console.log('testeeeeeeeeeeeeeeeeeeeeeee ServicesProducts');
  const result = await ModelProducts.createProducts(item);
  return result;
};

export default {
  createProducts,
};