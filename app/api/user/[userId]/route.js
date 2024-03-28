import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;
  try {
    const res = await prisma.users.findUnique({
      where: {
        id: userId,
      },
      include: {
        project: true,
      },
    });

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

export async function PUT(request, { params }) {
  const { userId } = params;
  const { twitter, github, linkedin, portfolio, skills } = await request.json();
  try {
    const res = await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        twitter,
        github,
        skills,
        linkedin,
        portfolio,
      },
    });

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

export async function DELETE(request, { params: { userId } }) {
  try {
    await prisma.users.delete({
      where: { id: userId },
    });

    return NextResponse.json({
      success: true,
      messsage: "User Deleted",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to delete user",
    });
  }
}
