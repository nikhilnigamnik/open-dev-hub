import { connectDB } from "@/helper/connectDB";
import { Project } from "@/models/Project";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { projectId } = params;
  try {
    await connectDB();
    const data = await Project.find({
      userId: projectId,
    });
    return NextResponse.json(data, {
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
