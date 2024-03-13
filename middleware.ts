import { cookies } from 'next/headers';
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

export function middleware(request: Request) {
  console.log(cookies().getAll()); 
}

// const url = new URL('https://localhost:3000/dashbaord/invoices');
// const x = new URL('/dashboard', url);
