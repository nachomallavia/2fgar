import { defineMiddleware } from 'astro/middleware';
import { db } from 'astro:db';

export const onRequest = defineMiddleware(async (context, next) => {
  const { cookies, redirect, url } = context;
  const isAdminRoute = url.pathname.startsWith('/admin');
  const session = cookies.get('session');

  if (isAdminRoute) {
    if (!session?.value) {
      return redirect('/login');
    }

    const user = await db.select().from('User').where({ id: parseInt(session.value) }).get();
    if (!user) {
      cookies.delete('session');
      return redirect('/login');
    }
  }

  return next();
});