import prisma from "@/lib/prisma";
import { handleError, handleSuccess } from "@/middlewares/responseMessage";

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
      return handleSuccess(res, "Projects fetched successfully", 200);
    } else {
      const res = await prisma.projects.findMany({
        include: {
          user: true,
        },
      });
      return handleSuccess(res, "Projects fetched successfully", 200);
    }
  } catch (error) {
    return handleError(error.message, 500);
  }
}

export async function POST(request) {
  const { title, description, tags, repoLink, projectLink, userId } =
    await request.json();

  try {
    if (
      !title ||
      !description ||
      !tags ||
      !repoLink ||
      !projectLink ||
      !userId
    ) {
      return handleError("All fields are required", 400);
    }
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

    return handleSuccess(res, "Project added successfully", 201);
  } catch (error) {
    console.log(error.message);
    return handleError(error.message, 500);
  }
}

