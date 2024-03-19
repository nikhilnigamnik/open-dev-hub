import React from "react";
import { Skeleton } from "../ui/skeleton";

const ProjectLoader = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <div className="rounded-xl p-3 flex flex-col gap-4  border border-border lg:w-4/6 w-full h-52">
          <div className="flex items-center gap-4">
            <Skeleton className={"w-8 h-8 rounded-full "} />
            <Skeleton className={"w-32 h-8 rounded-xl "} />
          </div>
          <Skeleton className={"w-2/4 h-8 rounded-xl"} />
          <Skeleton className={"w-full h-8 rounded-xl"} />
          <Skeleton className={"w-2/4 h-8 rounded-xl"} />
        </div>
      ))}
    </>
  );
};

export default ProjectLoader;
