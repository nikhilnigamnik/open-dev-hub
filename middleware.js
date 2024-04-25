import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export function middleware(request) {
  const session = getSession();
  const path = request.nextUrl.pathname;

  // if (path === "/login" && session) {
  //   return NextResponse.redirect(new URL("/project", request.url));
  // }

  return NextResponse.next();
}
