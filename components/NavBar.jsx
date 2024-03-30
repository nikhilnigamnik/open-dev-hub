import React from "react";
import { Button } from "./ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";
import { GitIcon, TwitterIcon } from "./Icon/Icon";

const NavBar = () => {
  return (
    <nav className="py-4 backdrop-blur-md sticky top-0 left-0 right-0 z-50">
      <div className=" flex justify-between items-center max-w-7xl m-auto px-4">
        <h1 className="text-xl  font-bold relative  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          <Link href={"/"}>OpenDevHub</Link>
        </h1>

        <div className="flex items-center gap-4">
          <Link href={"https://twitter.com/nikhil_nigamnik"}>
            <TwitterIcon />
          </Link>
          <Link href={"https://github.com/nikhilnigamnik/open-dev-hub"}>
            <GitIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
