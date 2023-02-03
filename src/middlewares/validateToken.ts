import { NextFunction, Request, Response } from 'express';
import { validateToken } from '../auth/validateToken';

const validateTokenC = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  const result = validateToken(token as string);
  if (!result) return res.status(401).json({ message: 'Invalid token' });
  req.body.user = result;
  return next();
};

export default validateTokenC;