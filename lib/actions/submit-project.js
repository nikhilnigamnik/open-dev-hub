"use server";

import { getRepo, validateGitRepo } from "@/lib/github";
import prisma from "@/lib/prisma";
import { customAlphabet } from "nanoid";
import { getUser } from "../auth";

export async function submitProject(_prevState, data) {
  const github = data.get("github");
  const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz", 10);

  const { user } = await getUser();
  console.log(user);

  const validateGit = validateGitRepo(github);
  if (validateGit.error) {
    return { error: "Invalid GitHub URL" };
  }

  const gitData = await getRepo(validateGit);

  const existingProject = await prisma.project.findUnique({
    where: { repo: github },
  });
  if (existingProject) {
    return { error: "This project already submitted" };
  }

  const existSlug = await prisma.project.findUnique({
    where: { slug: gitData.name },
  });
  const slug = existSlug ? `${gitData.name}-${nanoid(2)}` : gitData.name;

  const projectData = {
    name: gitData.name,
    description: gitData.description,
    repo: gitData.html_url,
    language: gitData.language,
    link: gitData.homepage,
    topics: gitData.topics,
    userId: user.id,
    stars: gitData.stars,
    logo: gitData.owner.avatar_url,
    verified: gitData.stars > 1000,
    slug: slug,
  };

  const project = await prisma.project.create({ data: projectData });

  return { redirect: `/project/${project.slug}` };
}
