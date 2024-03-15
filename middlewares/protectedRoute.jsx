import { NextRequest, NextResponse } from "next/server";

export default function middleware(req) {
  let session = false;
  if (!session && req.url.includes("/community")) {
    return NextResponse.redirect("/");
  }
}
