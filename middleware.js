import { NextResponse } from 'next/server'
import { hasCookie, getCookie } from "cookies-next";

export async function middleware(request) {
    const userUUID = request.cookies.get("user_uuid");
    const path = request.nextUrl.pathname.slice(1).split("/")
    if (userUUID) {
        if ((request.nextUrl.pathname.includes("profile") && path[1] == userUUID.value) || !request.nextUrl.pathname.includes("profile")) {
            return NextResponse.next()
        } else return NextResponse.redirect(new URL("/home", request.url))
    }
    else {
        return NextResponse.redirect(new URL('/sign-in', request.url))
    }
}
export const config = {
    matcher: ['/profile/:path*', '/ask-question'],
}