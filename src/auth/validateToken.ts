import jwt, { SignOptions } from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

type TypeToken = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
};

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

export const createToken = (loginWithoutPassword: TypeToken) => {
  const token = jwt.sign({ data: loginWithoutPassword }, secret, jwtConfig);
  return token;
};

export const validateToken = (token: string) => {
  try {
    if (!token) return { error: 'Token not found' };
    const validation = jwt.verify(token, secret);
    if (!jwtConfig.expiresIn) return { error: 'Expired or invalid token' };
    return validation;
  } catch (err) {
    return err;
  }
};

// Ajuda de Luídi Pires T-23 Tribo A;