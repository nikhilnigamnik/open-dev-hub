import React from "react";
import Container from "./ui/Container";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border py-10">
      <Container className={"sm:flex flex-row justify-between items-center"}>
        <h1 className="text-xl  font-bold relative  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          <Link href={"/"}>OpenDevHub</Link>
        </h1>
        <div className="flex flex-col gap-3">
          <p className="text-gradient">Connect with us on</p>
          <ul className="flex justify-between gap-4 text-gradient">
            <li>Github</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Discord</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
