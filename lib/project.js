import prisma from "./prisma";

export async function getProjects({ slug }) {
  const project = await prisma.project.findUnique({
    where: {
      slug: slug,
    },
  });

  return project;
}

export async function getProjectLanguages() {
  const languages = await prisma.project.findMany({
    select: {
      language: true,
    },
  });

  return languages;
}
