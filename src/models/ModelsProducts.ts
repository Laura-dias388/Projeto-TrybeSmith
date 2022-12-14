import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Product } from '../types';
import connection from './connection';

const createProducts = async ({ name, amount }:Product): Promise<Product> => {
  const result = await connection.execute<ResultSetHeader & Product>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, name, amount };
};

const getAllProducts = async (): Promise<Product[]> => {
  const [result] = await connection.execute<RowDataPacket[] & Product[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return result;
};

export default {
  createProducts,
  getAllProducts,
};
