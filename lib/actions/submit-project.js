"use server";

import { getRepo, validateGitRepo } from "@/lib/github";
import prisma from "@/lib/prisma";

export async function submitProject(_prevState, data) {
  console.log(data);
  const github = data.get("github");
  const user = data.get("userId");

  const validateGit = validateGitRepo(github);
  if (validateGit.error) {
    return { error: "Invalid GitHub URL" };
  }

  const gitData = await getRepo(validateGit);

  const existingProject = await prisma.project.findUnique({
    where: {
      repo: github,
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
      userId: user,
      stars: gitData.stars,
      logo: gitData.owner.avatar_url,
      verified: gitData.stars > 1000 ? true : false,
      slug: gitData.name,
    },
  });

  return { redirect: `/project/${project.slug}` };
}
