"use client";
import AdminSideBar from "@/components/Admin/AdminSideBar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const layout = ({ children }) => {
  return (
    <>
      <AdminSideBar />
      {children}
    </>
  );
};

export default layout;
