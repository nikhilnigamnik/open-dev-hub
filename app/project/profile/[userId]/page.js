"use client";
import { CardSpotlight } from "@/components/CardSpotlight";
import ProjectLoader from "@/components/Loader/ProjectLoader";
import { Badge } from "@/components/ui/badge";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import React from "react";

const Page = ({ params }) => {
  const { data, isLoading } = useFetch(`/api/user/${params.userId}`);

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <h1 className="text-gradient text-lg font-semibold">Projects</h1>
        <Link href={`${params?.userId}/newproject`}>
          <p className="border border-border bg-secondary rounded-xl px-3 py-1 text-sm">
            Add Project
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {isLoading ? (
          <ProjectLoader />
        ) : (
          data?.project.map((el) => (
            <CardSpotlight className={"animate_in "} key={el?._id} hoverEffect>
              <p>{el?.title}</p>
              <p>{el?.description}</p>
              <div className="flex gap-3">
                {el?.tags.map((tag, index) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
            </CardSpotlight>
          ))
        )}
        {data?.project.length === 0 && (
          <p className="border border-border bg-secondary rounded-xl px-3 py-1 text-sm ">No Projects Found</p>
        )}
      </div>
    </div>
  );
};

export default Page;
