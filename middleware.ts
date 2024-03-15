import { jwtVerify } from 'jose';
import { cookies, headers } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server';
import { getAuthSecretKey } from './app/lib/util';
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

export async function middleware(request: NextRequest) {
  const authToken = cookies().get('auth_token');
  if (request.nextUrl.pathname.startsWith('/chat')) {
    if (authToken && process.env.AUTH_SECRET) {
      try {
        const token = await jwtVerify(
          authToken.value,
          new TextEncoder().encode(getAuthSecretKey())
        );
        const headers = new Headers(request.headers);
        headers.set('x-user-id', String(token.payload.userId));
        return NextResponse.next({
          headers: headers
        });
      } catch (error) {
        console.log(error);
        throw new Error('Server error occured');
      }
    }
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

// const url = new URL('https://localhost:3000/dashbaord/invoices');
// const x = new URL('/dashboard', url);