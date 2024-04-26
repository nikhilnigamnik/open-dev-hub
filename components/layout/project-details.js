import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import NextImage from "../NextImage";

export default async function ProjectDetails({ project, data }) {
  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex items-start gap-4">
        <NextImage className={"w-28 h-28 rounded-full"} src={project?.logo} />
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold capitalize">{project?.name}</h1>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <Star className="h-4 w-4 text-gray-200" />
              <span>{project?.stars.toLocaleString() || 0}</span>
            </div>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            {project?.description}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <a href={project?.repo} target="_blank">
          <Button>View on GitHub</Button>
        </a>
        <a href={project?.link} target="_blank">
          <Button>Live Demo</Button>
        </a>
      </div>
      <Separator />
      <div>
        <h2 className="text-lg font-medium mb-4">Contributors</h2>
        <div className="grid grid-cols-5 gap-4">
          {data?.map((contributor) => (
            <a
              href={contributor?.html_url}
              target="_blank"
              key={contributor.id}
              className="flex flex-col items-center"
            >
              <NextImage
                className={"w-12 h-12 rounded-full"}
                src={contributor?.avatar_url}
                alt={contributor?.login}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
