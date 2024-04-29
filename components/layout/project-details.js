import { Separator } from "@/components/ui/separator";
import { BadgeCheck, Github, Globe, Star } from "lucide-react";
import NextImage from "../NextImage";
import { LinkButton } from "../ui/link-button";
import { Badge } from "../ui/badge";
import Avatar from "../Avatar";

export default async function ProjectDetails({ project, data }) {
  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-secondary  justify-center sm:items-start items-center border border-border">
        <NextImage
          width={100}
          height={100}
          className={"rounded-full"}
          src={project?.logo}
        />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 justify-between">
              <h1 className="text-2xl font-bold capitalize">{project?.name}</h1>
              {project?.verified && <BadgeCheck color="#6b7280" size={20} />}
            </div>
            <Badge className="flex items-center gap-2">
              <Star className="h-4 w-4 text-gray-200" />
              <span>{project?.stars.toLocaleString() || 0}</span>
            </Badge>
          </div>
          <p className="text-gray-400 text-sm">{project?.description}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <a href={project?.repo} target="_blank">
          <LinkButton className={"flex items-center gap-3"}>
            <Github />
            Github
          </LinkButton>
        </a>
        {project?.link && (
          <a href={project?.link} target="_blank">
            <LinkButton className={"flex items-center gap-3"}>
              <Globe />
              Website
            </LinkButton>
          </a>
        )}
      </div>

      <Separator />

      <>
        <h2 className="text-lg font-medium">Contributors</h2>
        <div className="grid grid-cols-5 gap-4">
          {data?.map((contributor) => (
            <a
              href={contributor?.html_url}
              target="_blank"
              key={contributor.id}
              className="flex flex-col items-center"
            >
              <Avatar src={contributor?.avatar_url} alt={contributor?.login} />
            </a>
          ))}
        </div>
      </>
    </div>
  );
}
