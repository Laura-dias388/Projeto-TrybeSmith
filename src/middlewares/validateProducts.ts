import { NextFunction, Request, Response } from 'express';

export const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 3) {
    return res.status(422)
      .json({ message: '"name" length must be at least 3 characters long' });
  } 
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  next();
};

export const validationAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;  
  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }
  if (amount.length < 3) {
    return res.status(422)
      .json({ message: '"amount" length must be at least 3 characters long' });
  } 
  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  next();
};
