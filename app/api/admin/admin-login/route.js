import prisma from "@/lib/prisma";
import { handleError, handleSuccess } from "@/middlewares/responseMessage";

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    if (!email || !password) {
      return handleError("Email and password are required", 400);
    }

    const user = await prisma.admin.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return handleError("User not found", 404);
    }

    if (user.password !== password) {
      return handleError("Invalid password", 400);
    }

    return handleSuccess(user, "Login successful", 200);
  } catch (error) {
    return handleError(error.message, 500);
  }
}
