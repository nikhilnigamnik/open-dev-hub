"use client";

import { CardSpotlight } from "@/components/CardSpotlight";
import { GitIcon, LinkedInIcon, TwitterIcon } from "@/components/Icon/Icon";
import ProjectLoader from "@/components/Loader/ProjectLoader";
import NextImage from "@/components/NextImage";
import { Badge } from "@/components/ui/badge";
import useFetch from "@/hooks/useFetch";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React from "react";

const page = ({ params: { devId } }) => {
  const getUsers = async () => {
    const res = await axios.get(`/api/user/${devId}`);
    return res.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["dev"],
    queryFn: getUsers,
  });

  return (
    <div className="lg:ml-64 text-white px-4 flex flex-col gap-4">
      <div className="flex animate_in  items-center gap-4">
        <NextImage
          className="rounded-full border-border border p-2 bg-secondary"
          src={data?.image}
          height={100}
          width={100}
          alt="profileImage"
        />
        <div>
          <p className="text-gradient font-semibold text-2xl">{data?.name}</p>
          <p className="text-gradient">{data?.email}</p>
        </div>
      </div>
      <h2 className="text-gradient text-lg font-semibold">Social Links</h2>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          {data?.linkedin && (
            <Link href={data?.github}>
              <GitIcon />
            </Link>
          )}

          {data?.github && (
            <Link href={data?.linkedin}>
              <LinkedInIcon />
            </Link>
          )}

          {data?.twitter && (
            <Link href={data?.twitter}>
              <TwitterIcon />
            </Link>
          )}
        </div>
        <div className="flex gap-2 mt-3">
          {data?.skills.map((skill, index) => (
            <Badge key={index}>{skill}</Badge>
          ))}
        </div>
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
          <p className="border border-border bg-secondary rounded-xl px-3 py-1 text-sm ">
            No Projects Found
          </p>
        )}
      </div>
    </div>
  );
};

export default page;
