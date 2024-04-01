import prisma from "@/lib/prisma";
import { handleError, handleSuccess } from "@/middlewares/responseMessage";

export async function GET() {
  try {
    const res = await prisma.organizationsProjects.findMany();
    return handleSuccess(res, "Projects fetched successfully", 200);
  } catch (error) {
    return handleError(error.message, 500);
  }
}

export async function POST(request) {
  const { title, description, repoLink, projectLink, tags } =
    await request.json();
  try {
    if (!title || !description || !repoLink || !projectLink || !tags)
      return handleError("All fields are required", 400);
    const res = await prisma.organizationsProjects.create({
      data: {
        title,
        description,
        repoLink,
        status: true,
        projectLink,
        tags,
      },
    });

    return handleSuccess(res, "Project added successfully", 201);
  } catch (error) {
    return handleError(error.message, 500);
  }
}
