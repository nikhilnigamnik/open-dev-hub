"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import { BookOpen, CirclePlus, Home } from "lucide-react";
import useUserStore from "@/zustand/useUserStore";

import AddProject from "./modals/add-project";
import LoginModal from "./modals/login";

const BottomNav = () => {
  const pathname = usePathname();
  const { user } = useUserStore();

  const loginModalRef = useRef(null);
  const addProjectRef = useRef(null);

  const handleOpenModal = () => {
    if (user?.status === "authenticated") {
      addProjectRef.current.open();
    } else {
      loginModalRef.current.open();
    }
  };

  return (
    <div className="fixed z-50  left-4 right-4  rounded-full bottom-4  border-border border outline-none backdrop-blur  transition-colors after:absolute after:inset-0 after:-z-10  w-fit mx-auto">
      <div className="flex  justify-between items-center gap-10">
        <Link
          href={"/"}
          className="inline-flex flex-col items-center justify-center px-5 py-3 rounded-s-full  hover:border-yellow-200/40 group"
        >
          <Home
            className={`w-5 h-5 mb-1 ${
              pathname === "/" ? "text-yellow-300" : "text-gray-500"
            }`}
          />

          <span className="sr-only">Home</span>
        </Link>

        <div
          onClick={handleOpenModal}
          className="flex items-center justify-center cursor-pointer"
        >
          <CirclePlus className="w-5 h-5 mb-1 text-gray-500" />
          <span className="sr-only">New item</span>
        </div>

        <Link
          href={"/blog"}
          className="inline-flex flex-col items-center justify-center px-5 group"
        >
          <BookOpen
            className={`w-5 h-5 mb-1 ${
              pathname === "/blog" ? "text-yellow-300" : "text-gray-500"
            }`}
          />

          <span className="sr-only">Blog</span>
        </Link>
      </div>
      <LoginModal ref={loginModalRef} />
      <AddProject ref={addProjectRef} />
    </div>
  );
};

export default BottomNav;
