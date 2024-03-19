"use client";
import { CardSpotlight } from "@/components/CardSpotlight";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [project, setProject] = useState([]);
  const getDevProjects = async () => {
    try {
      const res = await axios.get(`/api/project/${params.userId}`);
      setProject(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getDevProjects();
  }, []);
  return (
    <div className="mt-8">
      <h1 className="text-gradient text-lg font-semibold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {project.map((el) => (
          <CardSpotlight key={el?._id} hoverEffect>
            <p>{el?.title}</p>
            <p>{el?.description}</p>
            <p>{el?.link}</p>
            <p>{el?.tags}</p>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
};

export default Page;
