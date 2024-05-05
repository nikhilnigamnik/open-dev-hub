"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { memo } from "react";
import { BookOpen, CirclePlus, Home } from "lucide-react";
import { useModal } from "@/providers/modal-provider";
import AddProject from "./modals/add-project";
import Login from "./modals/login-modal";
import { useIsUserAuthenticated } from "@/lib/session";

const BottomNav = memo(() => {
  const pathname = usePathname();
  const { openLoginModal, openAddProjectModal } = useModal();
  const isAuthenticated = useIsUserAuthenticated();

  const handleOpenModal = () => {
    isAuthenticated ? openAddProjectModal() : openLoginModal();
  };

  return (
    <>
      <div className="fixed z-50 left-4 right-4 rounded-full bottom-4 border-border border outline-none backdrop-blur transition-colors after:absolute after:inset-0 after:-z-10 w-fit mx-auto">
        <div className="flex justify-between items-center gap-10">
          <Link
            href="/"
            className="inline-flex flex-col items-center justify-center px-5 py-3 rounded-s-full hover:border-yellow-200/40 group"
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
            href="/blog"
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
      </div>
      {isAuthenticated ? <AddProject /> : <Login />}
    </>
  );
});

export default BottomNav;
