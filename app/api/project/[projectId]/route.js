import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { projectId } = params;
  const project = await prisma.project.findUnique({
    where: {
      slug: projectId,
    },
  });

  return NextResponse.json(project);
}
