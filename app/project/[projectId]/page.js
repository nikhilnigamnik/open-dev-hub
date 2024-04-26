import ProjectDetails from "@/components/layout/project-details";
import { getDetailsRepo } from "@/lib/github";

import prisma from "@/lib/prisma";
import React from "react";

export default async function ({ params }) {
  const project = await prisma.project.findUnique({
    where: {
      slug: params.projectId,
    },
  });

  const url = new URL(project?.repo);
  const pathSegments = url.pathname.split("/").filter((segment) => segment);
  const result = pathSegments.join("/");

  const data = await getDetailsRepo(result);

  return (
    <div className="max-w-5xl mx-auto p-4 text-gray-200">
      <ProjectDetails project={project} data={data} />
    </div>
  );
}
