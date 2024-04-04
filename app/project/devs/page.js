"use client";

import DevProfileLoader from "@/components/Loader/DevProfileLoader";
import NextImage from "@/components/NextImage";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import React from "react";

const Page = () => {
  const { data, isLoading } = useFetch("/api/user");
  return (
    <div className="md:ml-64  px-4 h-screen">
      <h1 className="text-gradient text-lg">Devs Profiles</h1>
      <div className="gap-4 mt-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
        {isLoading ? (
          <DevProfileLoader />
        ) : (
          data.map((dev) => (
            <Link
              href={`/project/devs/${dev?.id}`}
              key={dev?._id}
              className="flex animate_in  flex-col justify-center items-center gap-4"
            >
              <NextImage
                src={dev.image}
                width={60}
                height={60}
                className="rounded-full"
                alt={dev.name}
              />
              <p className="text-gradient text-sm">{dev.name}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Page;
