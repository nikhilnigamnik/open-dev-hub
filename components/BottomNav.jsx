"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NextImage from "./NextImage";
import { BookOpen, CirclePlus, Home, User, UsersRound } from "lucide-react";

const BottomNav = () => {
  const pathname = usePathname();

  const user = false;

  return (
    <div className="fixed z-50  left-2 right-2    rounded-full bottom-4  border border-blue-100/20 bg-blue-200/10  text-blue-200 outline-none backdrop-blur-md  transition-colors after:absolute after:inset-0 after:-z-10   hover:text-yellow-300 after:hover:bg-opacity-15 max-w-5xl mx-auto">
      <div className="grid grid-cols-5 justify-between ">
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

        <Link
          href={`/project/profile/${user?.id}/newproject`}
          className="flex items-center justify-center"
        >
          <CirclePlus
            className={`w-5 h-5 mb-1 ${
              pathname === "/devs" ? "text-yellow-300" : "text-gray-500"
            }`}
          />
          <span className="sr-only">New item</span>
        </Link>

        <Link
          href={"/blog"}
          className="inline-flex flex-col items-center justify-center px-5 group"
        >
          <BookOpen
            className={`w-5 h-5 mb-1 ${
              pathname === "/project/community"
                ? "text-yellow-300"
                : "text-gray-500"
            }`}
          />

          <span className="sr-only">Community</span>
        </Link>

        <Link
          href={user ? `/project/profile/${user?.id}` : "/login"}
          className="inline-flex flex-col items-center justify-center px-5 rounded-e-full  group"
        >
          <User
            className={`w-5 h-5 mb-1 ${
              pathname === `/project/profile/${user?.id}`
                ? "text-yellow-300"
                : "text-gray-500"
            }`}
          />

          <span className="sr-only">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
