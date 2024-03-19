import { connectDB } from "@/helper/connectDB";
import { Project } from "@/models/Project";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();
    const project = await Project.find();
    return NextResponse.json(project, {
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}

export async function POST(request) {
  const { title, description, link, tags, status, userId } =
    await request.json();
  try {
    await connectDB();
    const user = await User.findById(userId);

    const project = new Project({
      title,
      description,
      link,
      tags,
      status,
      userId,
      user: user,
    });
    const newProject = await project.save();
    return NextResponse.json(newProject, {
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
