import prisma from "@/lib/prisma";
import ProjectCard from "./project-card";

const Project = async () => {
  const data = await prisma.project.findMany({});

  return (
    <div className="p-4 rounded-lg flex flex-col gap-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gradient">Projects</h1>
      <ProjectCard data={data} />
    </div>
  );
};

export default Project;
