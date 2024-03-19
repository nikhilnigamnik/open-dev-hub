import { connectDB } from "@/helper/connectDB";
import { User } from "@/models/User";
import { NextResponse } from "next/server";
import mongoose from 'mongoose';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { userId } = params;
    
    let user;
    if (mongoose.Types.ObjectId.isValid(userId)) {
      user = await User.findOne({ _id: userId });
    } else {
      user = await User.findOne({ email: userId });
    }

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }
    return NextResponse.json(user, {
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
