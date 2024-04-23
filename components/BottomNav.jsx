"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import NextImage from "./NextImage";

const BottomNav = () => {
  const pathname = usePathname();
  const { user } = useSelector((state) => state.persistedReducer.user);

  return (
    <div className="fixed block lg:hidden z-50  left-2 right-2   rounded-full bottom-4  border border-blue-100/20 bg-blue-200/10  text-blue-200 outline-none backdrop-blur-md  transition-colors after:absolute after:inset-0 after:-z-10   hover:text-yellow-300 after:hover:bg-opacity-15">
      <div className="grid grid-cols-5 justify-between ">
        <Link
          href={"/project"}
          className="inline-flex flex-col items-center justify-center px-5 py-3 rounded-s-full  hover:border-yellow-200/40 group"
        >
          <svg
            className={`w-5 h-5 mb-1 ${
              pathname === "/project" ? "text-yellow-300" : "text-gray-500"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span className="sr-only">Home</span>
        </Link>

        <Link
          href={"/project/devs"}
          className="inline-flex flex-col items-center justify-center px-5 group"
        >
          <svg
            className={`w-5 h-5 mb-1 ${
              pathname === "/project/devs" ? "text-yellow-300" : "text-gray-500"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>

          <span className="sr-only">Developers</span>
        </Link>

        <Link
          href={`/project/profile/${user?.id}/newproject`}
          className="flex items-center justify-center"
        >
          <button
            data-tooltip-target="tooltip-new"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 font-medium bg-yellow-300 rounded-full hover:bg-yellow-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
            <span className="sr-only">New item</span>
          </button>
        </Link>

        <Link
          href={"/project/community"}
          className="inline-flex flex-col items-center justify-center px-5 group"
        >
          <svg
            className={`w-5 h-5 mb-1 ${
              pathname === "/project/community"
                ? "text-yellow-300"
                : "text-gray-500"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
            />
          </svg>
          <span className="sr-only">Community</span>
        </Link>

        <Link
          href={user ? `/project/profile/${user?.id}` : "/login"}
          className="inline-flex flex-col items-center justify-center px-5 rounded-e-full  group"
        >
          {user?.profile ? (
            <svg
              className={`w-5 h-5 mb-1 ${
                pathname === `/project/profile/${user?.id}`
                  ? "text-yellow-300"
                  : "text-gray-500"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          ) : (
            <NextImage
              src={user?.image}
              width={30}
              height={30}
              alt={user?.name}
              className="rounded-full border p-1 border-border"
            />
          )}
          <span className="sr-only">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
