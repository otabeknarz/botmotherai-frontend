import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { updateSession } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Only protect dashboard and related routes
  const isProtectedRoute = path.startsWith('/dashboard') || 
                          path.startsWith('/profile') || 
                          path.startsWith('/settings');

  const access_token = request.cookies.get('access_token')?.value;
  const refresh_token = request.cookies.get('refresh_token')?.value;
  
  // Consider authenticated if either token exists
  const isAuthenticated = !!(access_token || refresh_token);

  // Redirect unauthenticated users to login page for protected routes
  if (!isAuthenticated && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Verify session for protected routes
  if (isProtectedRoute) {
    const user = await updateSession(request);
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Allow all other routes to pass through
  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*',
  ],
}; 