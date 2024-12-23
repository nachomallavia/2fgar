import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Database(join(__dirname, '../../data.db'));

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Read and execute schema
const schema = await Bun.file(join(__dirname, 'schema.sql')).text();
db.exec(schema);

export { db };