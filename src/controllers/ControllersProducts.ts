import { Request, Response } from 'express';
import ServicesProducts from '../services/ServicesProducts';

const createProducts = async (req: Request, res: Response) => {
  console.log('testeeeeeeeeeeeeeeeeeeeeeee');
  const getResult = req.body;
  const result = await ServicesProducts.createProducts(getResult);
  res.status(201).json(result);
};

export default {
  createProducts,
};

// Ajuda de Luídi Pires T-23 Tribo A;