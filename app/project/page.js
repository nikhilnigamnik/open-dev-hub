"use client";
import ProjectLoader from "@/components/Loader/ProjectLoader";
import ProjectCard from "@/components/ProjectComponents/ProjectCard";
import useFetch from "@/hooks/useFetch";

const Page = async () => {
  const { data, isLoading, isError } = useFetch("/api/projects");
  return (
    <div className="lg:ml-64 text-white">
      <div className="p-4  rounded-lg   flex flex-col gap-4">
        {isLoading ? <ProjectLoader /> : <ProjectCard data={data} />}
      </div>
    </div>
  );
};

export default Page;
