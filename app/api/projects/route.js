import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const tags = searchParams.get("tags");
  try {
    if (tags) {
      const res = await prisma.projects.findMany({
        where: {
          tags: {
            hasSome: tags ? tags.split(",") : undefined,
          },
        },
        include: {
          user: true,
        },
      });
      return NextResponse.json(res, {
        success: true,
      });
    } else {
      const res = await prisma.projects.findMany({
        include: {
          user: true,
        },
      });
      return NextResponse.json(res, {
        success: true,
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}

export async function POST(request) {
  const { title, description, tags, repoLink, projectLink, userId } =
    await request.json();

  try {
    const res = await prisma.projects.create({
      data: {
        title,
        description,
        tags,
        projectLink,
        status: true,
        repoLink,
        userId,
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
