"use client";

import { CardSpotlight } from "@/components/CardSpotlight";
import ProjectLoader from "@/components/Loader/ProjectLoader";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = async () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const getDevProjects = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/project");
      setProject(res.data);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    getDevProjects();
  }, []);
  return (
    <div className="md:ml-64 text-white">
      <div className="p-4  rounded-lg   flex flex-col gap-4">
        {/* <div className="p-2 rounded-xl border border-border bg-secondary">
          Filter Data
        </div> */}
        {loading ? (
          <ProjectLoader />
        ) : (
          <div className="flex flex-col gap-4">
            {project.map((el) => (
              <CardSpotlight
                className={"lg:w-4/6 w-full"}
                key={el?._id}
                hoverEffect
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={el?.user?.image}
                    alt="avatar"
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                  <p>{el?.user?.name}</p>
                </div>
                <p className="text-lg font-bold text-gradient">{el?.title}</p>
                <p className="text-gray-200">{el?.description}</p>
                <p className="text-gray-200">{el?.link}</p>
                <p className="text-gray-200">{el?.tags}</p>
              </CardSpotlight>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
