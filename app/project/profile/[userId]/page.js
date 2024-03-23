"use client";
import { CardSpotlight } from "@/components/CardSpotlight";
import ProjectLoader from "@/components/Loader/ProjectLoader";
import { Badge } from "@/components/ui/badge";
import useFetch from "@/hooks/useFetch";
import React from "react";

const Page = ({ params }) => {
  const { data, isLoading, isError } = useFetch(`/api/user/${params.userId}`);

  return (
    <div className="mt-4">
      <h1 className="text-gradient text-lg font-semibold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {isLoading ? (
          <ProjectLoader />
        ) : (
          data?.project.map((el) => (
            <CardSpotlight key={el?._id} hoverEffect>
              <p>{el?.title}</p>
              <p>{el?.description}</p>
              <p>{el?.link}</p>jn
              <div className="flex gap-3">
                {el?.tags.map((tag, index) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
            </CardSpotlight>
          ))
        )}
      </div>
    </div>
  );
};

export default Page;
