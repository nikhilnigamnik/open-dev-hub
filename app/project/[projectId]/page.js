import ProjectDetails from "@/components/layout/project-details";
import { getUser } from "@/lib/auth";
import { getDetailsRepo } from "@/lib/github";
import { getProjects } from "@/lib/project";
import { notFound } from "next/navigation";
import React from "react";

export default async function ({ params }) {

  const project = await getProjects({ slug: params.projectId });

 
  if (!project) {
    notFound();
  }

  const { user } = await getUser();

  const url = new URL(project?.repo);

  const pathSegments = url.pathname.split("/").filter((segment) => segment);
  
  const result = pathSegments.join("/");

  const data = await getDetailsRepo(result);

  return (
    <div className="max-w-5xl mx-auto p-4 text-gray-200">
      <ProjectDetails project={project} data={data} user={user} />
    </div>
  );
}
