import prisma from "@/lib/prisma";
import { handleError, handleSuccess } from "@/middlewares/responseMessage";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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

    const validatePassword = await bcryptjs.compare(password, user.password);

    if (!validatePassword) {
      return handleError("Invalid password", 400);
    }

    const tokenData = {
      id: user._id,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const response = handleSuccess(token, "Login successful", 200);

    response.cookies.set("token", token, {
      httpOnly: true,
    });
    
    return response;
  } catch (error) {
    return handleError(error.message, 500);
  }
}
