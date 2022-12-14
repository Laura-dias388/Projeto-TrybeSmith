import { ResultSetHeader } from 'mysql2/promise';
import { Product } from '../types';
import connection from './connection';

const createProducts = async ({ name, amount }:Product): Promise<Product> => {
  const result = await connection.execute<ResultSetHeader & Product>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  console.log('testeeeeeeeeeeeeeeeeeeeeeee Model');
  return { id: insertId, name, amount };
};

export default {
  createProducts,
};
