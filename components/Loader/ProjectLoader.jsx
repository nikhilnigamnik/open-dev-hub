import React from "react";
import { Skeleton } from "../ui/skeleton";

const ProjectLoader = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <div className="rounded-xl p-3 flex flex-col gap-4  border border-border lg:w-4/6 w-full h-52">
          <div className="flex items-center gap-4">
            <Skeleton className={"w-8 h-8 rounded-full "} />
            <Skeleton className={"w-32 h-5 rounded-xl "} />
          </div>
          <Skeleton className={"w-2/4 h-5 rounded-xl"} />
          <Skeleton className={"w-full h-5 rounded-xl"} />
          <Skeleton className={"w-2/4 h-5 rounded-xl"} />
          <div className="flex items-center gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton className={"w-20 h-5 rounded-xl"} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectLoader;
