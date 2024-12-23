import { defineDb, defineTable, column } from 'astro:db';

const Contact = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    message: column.text(),
    createdAt: column.date({ default: new Date() })
  }
});

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text({ unique: true }),
    password: column.text(),
    role: column.text({ default: 'user' }),
    createdAt: column.date({ default: new Date() })
  }
});

const Project = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    location: column.text(),
    year: column.number(),
    description: column.text(),
    image: column.text(),
    images: column.json(),
    userId: column.number({ references: () => User.columns.id }),
    createdAt: column.date({ default: new Date() })
  }
});

export default defineDb({
  tables: { Contact, User, Project }
});