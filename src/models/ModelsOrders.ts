import { RowDataPacket } from 'mysql2/promise';
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

export default {
  getAllOrders,
};