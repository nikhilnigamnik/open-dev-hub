"use client";
import ProjectLoader from "@/components/Loader/ProjectLoader";
import ProjectCard from "@/components/ProjectComponents/ProjectCard";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/helper/apis";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Page = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const [searchData, setSearchData] = useState("");

  return (
    <div className="lg:ml-64 text-white">
      <div className="p-4  rounded-lg   flex flex-col gap-4">
        {isLoading ? (
          <ProjectLoader />
        ) : (
          <>
            <div className="flex items-center gap-4 border border-border rounded-full w-fit  pl-4 pr-1 py-1">
              <input
                type="text"
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
                className="outline-none bg-transparent"
              />
              <Button>Search</Button>
            </div>
            <ProjectCard data={data?.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
