"use client";

import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const layout = ({ children, params }) => {
  const session = useSession();
  if (session?.status === "unauthenticated") {
    redirect("/project");
  }
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(null);
  const getDevProfile = async () => {
    try {
      const res = await axios.get(`/api/user/${params.userId}`);
      setData(res.data);
    } catch (error) {}
  };

  

  useEffect(() => {
    getDevProfile();
  }, []);
  return (
    <div className="md:ml-64 text-white px-4">
      <div className="flex items-center gap-4">
        <Image
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
        <p
          className="cursor-pointer border border-border rounded-xl px-4 py-1 bg-secondary"
          onClick={() => {
            signOut("google");
            redirect("/project");
          }}
        >
          Logout
        </p>
      </div>
      {children}
    </div>
  );
};

export default layout;
