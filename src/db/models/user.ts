import { db } from '../index';
import bcrypt from 'bcryptjs';

export interface User {
  id: number;
  email: string;
  role: string;
  created_at: string;
}

export async function createUser(data: {
  email: string;
  password: string;
  role?: string;
}) {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  
  const stmt = db.prepare(`
    INSERT INTO users (email, password, role)
    VALUES (@email, @password, @role)
  `);
  
  return stmt.run({
    email: data.email,
    password: hashedPassword,
    role: data.role || 'user'
  });
}

export async function getUserByEmail(email: string) {
  return db.prepare('SELECT * FROM users WHERE email = ?')
    .get(email) as User | undefined;
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword);
}