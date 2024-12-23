import { db } from '../index';

export interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export async function createContact(data: {
  name: string;
  email: string;
  message: string;
}) {
  const stmt = db.prepare(`
    INSERT INTO contacts (name, email, message)
    VALUES (@name, @email, @message)
  `);
  
  return stmt.run(data);
}

export async function getAllContacts() {
  return db.prepare('SELECT * FROM contacts ORDER BY created_at DESC').all() as Contact[];
}