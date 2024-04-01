import prisma from "@/lib/prisma";
import { handleError, handleSuccess } from "@/middlewares/responseMessage";

export async function GET() {
  try {
    const project = await prisma.organizationsProjects.findMany();
    return handleSuccess(project, "Projects fetched successfully", 200);
  } catch (error) {
    return handleError(error.message, 500);
  }
}

export async function POST(request) {
  const { title, description, tags, repoLink, projectLink } =
    await request.json();

  try {
    if (
      !title ||
      !description ||
      !tags ||
      !repoLink ||
      !projectLink ||
      !organizationId
    ) {
      return handleError("All fields are required", 400);
    }

    const res = await prisma.organizationsProjects.create({
      data: {
        title,
        description,
        tags,
        projectLink,
        status: true,
        repoLink,
        organizationId,
      },
    });

    return handleSuccess(res, "Project added successfully", 201);
  } catch (error) {
    return handleError(error.message, 500);
  }
}

export async function PUT(request) {
  const { projectId } = await request.json();
  try {
    await prisma.organizationsProjects.update({
      where: { id: projectId },
      data: { status: false },
    });

    return handleSuccess("Project archived successfully", 200);
  } catch (error) {
    return handleError(error.message, 500);
  }
}
