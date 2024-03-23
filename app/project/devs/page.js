"use client";
import DevProfileLoader from "@/components/Loader/DevProfileLoader";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import React from "react";

const Page = () => {
  const { data, isLoading } = useFetch("/api/user");
  return (
    <div className="md:ml-64  px-4 h-screen">
      <h1 className="text-gradient text-lg">Devs Profiles</h1>
      <div className="flex flex-wrap gap-4 lg:w-4/6 w-full mt-8">
        {isLoading ? (
          <DevProfileLoader />
        ) : (
          data.map((dev) => (
            <div
              key={dev?._id}
              className="flex animate_in  flex-col justify-center items-center gap-4"
            >
              <Image
                src={dev.image}
                width={60}
                height={60}
                className=" rounded-full"
                alt={dev.name}
              />
              <p className="text-gradient text-sm">{dev.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Page;
