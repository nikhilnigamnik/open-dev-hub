import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const res = await prisma.users.findMany();
    return NextResponse.json(res, {
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}

export async function POST(request) {
  const { name, email, image } = await request.json();
  try {
    const res = await prisma.users.create({
      data: {
        name,
        email,
        image,
      },
    });

    return NextResponse.json(res, {
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
