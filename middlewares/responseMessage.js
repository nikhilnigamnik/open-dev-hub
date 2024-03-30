import { NextResponse } from "next/server";

export function handleError(message, status = 500) {
  return NextResponse.json(
    {
      success: false,
      message: message,
    },
    { status }
  );
}

export function handleSuccess(data, message, status = 200) {
  return NextResponse.json(
    {
      data,
      success: true,
      message: message,
    },
    { status }
  );
}
