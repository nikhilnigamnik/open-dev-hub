import prisma from "@/lib/prisma";
import { handleError, handleSuccess } from "@/middlewares/responseMessage";
import bcryptjs from "bcryptjs";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const res = await prisma.admin.create({
      data: {
        email,
        password: hashPassword,
      },
    });
    return handleSuccess(res, "Admin Registered", 200);
  } catch (error) {
    return handleError(error.message, 400);
  }
}
