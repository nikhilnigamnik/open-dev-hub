"use client";
import ProjectLoader from "@/components/Loader/ProjectLoader";
import ProjectCard from "@/components/project-components/ProjectCard";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";

const page = () => {
  const [tag, setTag] = useState("");
  const { data, isLoading } = useFetch(`/api/projects?tags=${tag}`);
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

export default page;
