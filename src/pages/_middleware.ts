import { NextRequest, NextResponse } from 'next/server';

import { AuthCookies } from '@utils/authCookies';

export async function middleware(req: NextRequest) {
  const authCookies = AuthCookies.getAuthCookiesFromCookies(req.cookies);

  const isAuthenticated = authCookies.access_token && authCookies.refresh_token;

  if (req.nextUrl.pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(req.nextUrl.origin);
  }

  if (req.nextUrl.pathname === '/' && !isAuthenticated) {
    return NextResponse.redirect(`${req.nextUrl.origin}/login`);
  }

  return NextResponse.next();
}
