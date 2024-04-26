"use server";

import { getRepo } from "@/lib/github";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function submitProject(_prevState, data) {
  const github = data.get("github");

  if (!github) {
    return {
      error: "Please enter a valid GitHub repository link",
    };
  }
  const url = new URL(github);
  const pathSegments = url.pathname.split("/").filter((segment) => segment);
  const result = pathSegments.join("/");
  const gitData = await getRepo(result);

  const existingProject = await prisma.project.findUnique({
    where: {
      repo: url,
    },
  });

  if (existingProject) {
    return { error: "This project already submitted" };
  }

  const project = await prisma.project.create({
    data: {
      name: gitData.name,
      description: gitData.description,
      repo: gitData.html_url,
      language: gitData.language,
      link: gitData.homepage,
      language: gitData.language,
      topics: gitData.topics,
      userId: "65fd3812719bc370450efc9f",
      stars: gitData.stars,
      logo: gitData.owner.avatar_url,
      verified: gitData.stars > 1000 ? true : false,
      slug: gitData.name,
    },
  });

  return redirect(`/project/${project.slug}`);
}
