import prisma from "@/lib/prisma";
import ProjectCard from "./project-card";

const Project = async () => {
  const data = await prisma.project.findMany({});

  return (
    <div className="p-4 rounded-lg max-w-5xl mx-auto">
      <ProjectCard data={data} />
    </div>
  );
};

export default Project;
