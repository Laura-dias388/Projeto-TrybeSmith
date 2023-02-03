import { NextFunction, Request, Response } from 'express';

export const validateOrders = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }
  if (typeof productsIds !== 'object') {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  if (!productsIds.length) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  next();
}
