"use client";
import AdminSideBar from "@/components/Admin/AdminSideBar";
import { redirect } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const layout = ({ children }) => {
  const { admin } = useSelector((state) => state.user);

  if (!admin) {
    redirect("/");
  }

  return (
    <>
      <AdminSideBar />
      {children}
    </>
  );
};

export default layout;
