import ProjectDetails from "@/components/layout/project-details";
import { getDetailsRepo } from "@/lib/github";
import { getProject } from "@/lib/project";
import { notFound } from "next/navigation";
import React from "react";

const projectData = await getProject();

export async function generateStaticParams() {
  return projectData.map((project) => ({
    params: {
      projectId: project.slug,
    },
  }));
}

export async function generateMetadata({ params }) {
  const project = projectData.find(
    (project) => project.slug === params.projectId
  );
  if (!project) {
    notFound();
  }

  return {
    title: `${project.name} - Open Source Projects`,
    description: project.description,
    image: project.image,
  };
}

export default async function ({ params }) {
  const project = projectData.find(
    (project) => project.slug === params.projectId
  );

  if (!project) {
    notFound();
  }

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
