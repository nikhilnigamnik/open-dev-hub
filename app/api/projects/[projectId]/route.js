import prisma from "@/lib/prisma";
import { handleError, handleSuccess } from "@/middlewares/responseMessage";

export async function DELETE(request, { params: { projectId } }) {
  try {
    await prisma.projects.delete({
      where: { id: projectId },
    });

    return handleSuccess("Project deleted successfully", 200);
  } catch (error) {
    return handleError(error.message, 500);
  }
}

export async function PUT(request, { params: { projectId } }) {
  try {
    const project = await request.json();
    const res = await prisma.projects.update({
      where: { id: projectId },
      data: project,
    });

    return handleSuccess(res, "Project Updated!", 200);
  } catch (error) {
    return handleError(error.message, 500);
  }
}
