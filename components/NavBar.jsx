import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="py-4 backdrop-blur-md sticky top-0 left-0 right-0 z-50">
      <div className=" flex justify-between items-center max-w-7xl m-auto px-4">
        <h1 className="text-xl  font-bold relative  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          <Link href={"/"}>OpenDevHub</Link>
        </h1>
        <div className="hidden md:block">
          <ul className="flex   justify-between items-center gap-10 text-slate-100">
            <li>
              <Link href={"/project"}>Projects</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/community"}>Community</Link>
            </li>
          </ul>
        </div>
        <Button>
          <Link href={"/login"}>Login</Link>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
