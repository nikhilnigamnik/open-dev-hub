import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const token = request.cookies.get("token");

  if (path === "/admin" && !token) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }

  if (path === "/admin" && token) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  return NextResponse.next();
}
