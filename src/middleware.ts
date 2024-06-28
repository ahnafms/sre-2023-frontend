import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (
    process.env.NODE_ENV == 'development' ||
    ['development', 'preview'].includes(process.env.VERCEL_ENV ?? '')
  ) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/coming-soon', request.url));
}

// NOTE : comment one of the paths for displaying in production
export const config = {
  matcher: [
    // '/outlook/:path*',
    // '/jurnal/:path*',
    '/akademia/:path*',
    '/event/:path*',
    '/achievement/:path*',
    '/merchandise',
    '/contact',
  ],
};
