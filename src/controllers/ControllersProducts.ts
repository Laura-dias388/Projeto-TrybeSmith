import { Request, Response } from 'express';
import ServicesProducts from '../services/ServicesProducts';

const createProducts = async (req: Request, res: Response) => {
  const getResult = req.body;
  const result = await ServicesProducts.createProducts(getResult);
  res.status(201).json(result);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const result = await ServicesProducts.getAllProducts();
  if (result.length === 0) {
    return res.status(404).json({ message: 'Nenhum produto encontrado' });
  }
  res.status(200).json(result);
};

export default {
  createProducts,
  getAllProducts,
};

// Ajuda de Luídi Pires T-23 Tribo A;