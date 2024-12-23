import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async ({ cookies, redirect, url }, next) => {
  const isAdminRoute = url.pathname.startsWith('/admin');
  const session = cookies.get('session');

  if (isAdminRoute && !session?.value) {
    return redirect('/login');
  }

  return next();
});