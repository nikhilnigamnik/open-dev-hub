import prisma from "./prisma";

export async function getProjects({ slug }) {
  const project = await prisma.project.findUnique({
    where: {
      slug: slug,
    },
  });

  return project;
}
