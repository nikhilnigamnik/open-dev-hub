import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <p className="text-4xl sm:text-7xl font-bold   bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
      <Button>Hello</Button>
    </div>
  );
};

export default Hero;
