import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="py-4 border-b border-gray-700 backdrop-blur-md sticky top-0 left-0 right-0">
      <div className=" flex justify-between items-center max-w-7xl m-auto px-4">
        <h1 className="text-xl  font-bold relative  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          OpenDevHub
        </h1>
        <ul className="flex justify-between items-center gap-10 text-slate-100">
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/community"}>Community</Link>
          </li>
        </ul>
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default NavBar;
