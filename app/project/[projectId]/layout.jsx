import { getProjects } from "@/lib/project";
import { Suspense } from "react";
import Loader from "../loading";

export async function generateMetadata({ params }) {
  const project = await getProjects({ slug: params.projectId });

  if (!project) {
    return {
      title: "Project not found | Open Dev Hub",
      description: "Project not found",
    };
  }

  return {
    title: `${project?.name} | Open Dev Hub`,
    description: `View ${project.name} on Open Dev Hub ${project.description}`,
  };
}

export default async function layout({ children }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
