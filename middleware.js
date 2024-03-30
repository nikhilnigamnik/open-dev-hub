import { NextResponse } from "next/server";

export function middleware(request) {
  // const user = false;
  // if (!user) {
  //   return NextResponse.redirect(new URL("/admin-login", request.url));
  // }

  return NextResponse.next();
}

// export const config = {
//   matcher: ["/admin"],
// };
