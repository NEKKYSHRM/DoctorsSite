import { NextResponse } from "next/server";

export function middleware(request) {
    const path = request.nextUrl.pathname;

    const isPathPublic = path === "/login" || path === "/signup" || path === "/";
    const token = request.cookies.get("token")?.value;

    if(!isPathPublic && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (isPathPublic && token) {
        return NextResponse.redirect(new URL("/profile", request.url));
    }
}

export const config = {
    matcher: ["/login", "/signup", "/", "/profile"],
  };