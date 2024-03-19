import { connectDB } from "@/helper/connectDB";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();
    const user = await User.find();
    return NextResponse.json(user, {
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
