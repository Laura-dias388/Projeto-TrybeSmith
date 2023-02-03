import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Orders } from '../types';
import connection from './connection';

const getAllOrders = async (): Promise<Orders[]> => {
  const [result] = await connection.execute<RowDataPacket[] & Orders[]>(
    `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.orders AS orders INNER JOIN
    Trybesmith.products AS products ON products.order_id = orders.id GROUP BY orders.id`,
  );
  return result;
};

const createOrder = async ({ userId, productsIds }: Orders) => {
  const [{ insertId, affectedRows }] = await connection
    .execute<ResultSetHeader>('INSERT INTO Trybesmith.orders (user_id) VALUES (?)', [userId]);
  const promises = productsIds.map((id) => connection
    .execute<ResultSetHeader>('UPDATE Trybesmith.products SET order_id = ? WHERE id = ?', [insertId, id]));
  await Promise.all(promises);
  return affectedRows;
};

export default {
  getAllOrders,
  createOrder,
};