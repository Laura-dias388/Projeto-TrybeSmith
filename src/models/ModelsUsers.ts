import { ResultSetHeader } from 'mysql2/promise';
import { Users } from '../types';
import connection from './connection';

const createUsers = async ({ username, vocation, level, password }: Users): Promise<Users> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader & Users>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return { id: insertId, username, vocation, level };
};

export default {
  createUsers,
};

// Ajuda de Ewerton Ferreira T-23 Tribo A;