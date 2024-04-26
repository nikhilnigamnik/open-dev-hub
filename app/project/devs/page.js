import NextImage from "@/components/NextImage";
import { getDevs } from "@/lib/devs";
import React from "react";

const Page = async () => {
  const data = await getDevs();
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-gradient text-lg">Devs Profiles</h1>
      <div className="gap-4 mt-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
        {data.map((dev) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
