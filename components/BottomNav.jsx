"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BookOpen, CirclePlus, Home, User, UsersRound } from "lucide-react";
import useUserStore from "@/zustand/useUserStore";
import AddProject from "./modals/add-project";
import useProjectModal from "@/zustand/useProjectModal";
import useLoginModal from "@/zustand/useLoginModal";
import Login from "./modals/login";

const BottomNav = () => {
  const pathname = usePathname();
  const { user } = useUserStore();
  console.log(user);
  const { openProject } = useProjectModal();
  const { openLogin } = useLoginModal();

  return (
    <div className="fixed z-50  left-4 right-4  rounded-full bottom-4  border-border border outline-none backdrop-blur-md  transition-colors after:absolute after:inset-0 after:-z-10  max-w-5xl mx-auto">
      <div className="grid grid-cols-5 justify-between items-center">
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

        <Link
          href={"/devs"}
          className="inline-flex flex-col items-center justify-center px-5 group"
        >
          <UsersRound
            className={`w-5 h-5 mb-1 ${
              pathname === "/devs" ? "text-yellow-300" : "text-gray-500"
            }`}
          />

          <span className="sr-only">Developers</span>
        </Link>

        {user?.status === "authenticated" ? (
          <div
            onClick={openProject}
            className="flex items-center justify-center cursor-pointer"
          >
            <CirclePlus className={`w-5 h-5 mb-1 text-gray-500`} />
            <span className="sr-only">New item</span>
          </div>
        ) : (
          <div
            onClick={openLogin}
            className="flex items-center justify-center cursor-pointer"
          >
            <CirclePlus className={`w-5 h-5 mb-1 text-gray-500`} />
            <span className="sr-only">New item</span>
          </div>
        )}

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

        {user?.status === "authenticated" ? (
          <div
            onClick={openProject}
            className="inline-flex flex-col items-center justify-center px-5 rounded-e-full  group cursor-pointer"
          >
            <User className={`w-5 h-5 mb-1 text-gray-500`} />

            <span className="sr-only">Profile</span>
          </div>
        ) : (
          <div
            onClick={openLogin}
            className="inline-flex flex-col items-center justify-center px-5 rounded-e-full  group cursor-pointer"
          >
            <User className={`w-5 h-5 mb-1 text-gray-500`} />

            <span className="sr-only">Profile</span>
          </div>
        )}
      </div>
      <AddProject />
      <Login />
    </div>
  );
};

export default BottomNav;
