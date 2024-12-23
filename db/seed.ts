import { db } from 'astro:db';
import bcrypt from 'bcryptjs';

// Seed the database with initial data
export default async function seed() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  await db.insert('User').values({
    email: 'admin@example.com',
    password: hashedPassword,
    role: 'admin'
  });

  console.log('✅ Database seeded!');
}