"use client";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { getRepoData } from "@/helper/apis";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Page = async () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: "repoData",
    queryFn: getRepoData,
  });

  return (
    <div className="md:ml-64 text-white">
      <div className="p-4  rounded-lg   flex flex-col gap-4">
        <div className="p-2 rounded-xl border border-border bg-secondary">
          Filter Data
        </div>

        <CardSpotlight className={"lg:w-3/5 w-full"} hoverEffect>
          jsdnvjdsjvbjkds
        </CardSpotlight>
      </div>
    </div>
  );
};

export default Page;
