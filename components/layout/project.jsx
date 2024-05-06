import prisma from "@/lib/prisma";
import ProjectCard from "./project-card";

export default async function Project() {
  const data = await prisma.project.findMany({});
  const languages = await prisma.project.findMany({
    distinct: ["language"],
    select: {
      language: true,
    },
  });

  return (
    <div className="p-4 rounded-lg max-w-5xl mx-auto">
      <ProjectCard data={data} language={languages} />
    </div>
  );
}
