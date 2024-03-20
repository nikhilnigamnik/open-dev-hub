"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [devs, setDevs] = useState([]);
  const getDevsProfile = async () => {
    try {
      const res = await axios.get("/api/user");
      setDevs(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getDevsProfile();
  }, []);
  return (
    <div className="md:ml-64  px-4 h-screen">
      <h1 className="text-gradient text-lg">
        Devs Profiles
      </h1>
      <div className="flex flex-wrap gap-4 lg:w-4/6 w-full mt-8"> 
        {devs.map((dev) => (
          <div key={dev?._id} className="flex flex-col justify-center items-center gap-4">
            <img src={dev.image} className="w-14 h-14 rounded-full" />
            <p className="text-gradient text-sm">{dev.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
