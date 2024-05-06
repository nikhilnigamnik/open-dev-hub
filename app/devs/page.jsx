import Avatar from "@/components/Avatar";
import prisma from "@/lib/prisma";
import React from "react";

const Page = async () => {
  const data = await prisma.users.findMany({});
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-gradient text-lg">Devs Profiles</h1>
      <div className="gap-4 mt-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
        {data.map((dev) => (
          <div
            key={dev?._id}
            className="flex animate_in  flex-col justify-center items-center gap-4"
          >
            <Avatar src={dev.image} alt={dev.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
