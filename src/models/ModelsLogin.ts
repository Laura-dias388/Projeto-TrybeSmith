import { RowDataPacket } from 'mysql2/promise';
// import { Users } from '../types';
import connection from './connection';

const createLogin = async (username: string) => {
  const [[item]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  return item;
};

export default {
  createLogin,
};