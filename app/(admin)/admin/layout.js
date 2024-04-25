"use client";
import AdminSideBar from "@/components/Admin/AdminSideBar";
import React from "react";

const layout = ({ children }) => {
  
  return (
    <>
      <AdminSideBar />
      {children}
    </>
  );
};

export default layout;
