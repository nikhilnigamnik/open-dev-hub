import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, image } = await request.json();
  try {
    const user = new User({
      name,
      email,
      image,
    });

    const newUser = await user.save();
    return NextResponse.json(newUser, {
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
