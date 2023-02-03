import jwt, { SignOptions } from 'jsonwebtoken';

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
    const decoded = jwt.verify(token, secret);
    return decoded;

  } catch (error) {

    return false;
  }
};

// Ajuda de Luídi Pires T-23 Tribo A;