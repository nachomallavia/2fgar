import { db } from '../index';

export interface Project {
  id: number;
  title: string;
  location: string;
  year: number;
  description: string;
  image: string;
  images: string;
  user_id: number;
  created_at: string;
}

export async function getAllProjects() {
  return db.prepare('SELECT * FROM projects ORDER BY created_at DESC')
    .all() as Project[];
}

export async function getProjectById(id: number) {
  return db.prepare('SELECT * FROM projects WHERE id = ?')
    .get(id) as Project | undefined;
}

export async function createProject(data: {
  title: string;
  location: string;
  year: number;
  description: string;
  image: string;
  images: string[];
  userId: number;
}) {
  const stmt = db.prepare(`
    INSERT INTO projects (title, location, year, description, image, images, user_id)
    VALUES (@title, @location, @year, @description, @image, @images, @userId)
  `);
  
  return stmt.run({
    ...data,
    images: JSON.stringify(data.images)
  });
}

export async function updateProject(id: number, data: Partial<Project>) {
  const fields = Object.keys(data)
    .map(key => `${key} = @${key}`)
    .join(', ');

  if (data.images && Array.isArray(data.images)) {
    data.images = JSON.stringify(data.images);
  }

  const stmt = db.prepare(`
    UPDATE projects 
    SET ${fields}
    WHERE id = @id
  `);

  return stmt.run({ ...data, id });
}

export async function deleteProject(id: number) {
  return db.prepare('DELETE FROM projects WHERE id = ?').run(id);
}