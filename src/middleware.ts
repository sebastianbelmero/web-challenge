import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const accessToken = request.cookies.get('accessToken')?.value;
    const refreshToken = request.cookies.get('refreshToken')?.value;
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/dashboard') && (!accessToken && !refreshToken)) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('redirectedFrom', pathname);
        return NextResponse.redirect(loginUrl);
    }

    if (pathname.startsWith('/login') && accessToken && refreshToken) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }


    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/login'
    ],
};