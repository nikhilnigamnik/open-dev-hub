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
