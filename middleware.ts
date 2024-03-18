import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server';
import { getAuthSecretKey } from './app/lib/util';
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

export async function middleware(request: NextRequest) {
  // Get the auth_token header cookie
  const authToken = cookies().get('auth_token');
  // If url path start with chat check if the user is authenticated
  if (request.nextUrl.pathname.startsWith('/chat')) {
    // verify jwt if already authenticated
    if (authToken && process.env.AUTH_SECRET) {
      try {
        const token = await jwtVerify(
          authToken.value,
          new TextEncoder().encode(getAuthSecretKey())
        );
        const headers = new Headers(request.headers);
        // Custom header
        headers.set('x-user-id', String(token.payload.userId));
        // proceed request processing if jwt is verified
        return NextResponse.next({
          headers: headers
        });
      } catch (error) {
        console.log(error);
        throw new Error('Server error occured');
      }
    }
    // Redirect to signin if user is not authenticated
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}
