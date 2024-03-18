import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <img
      src={
        "https://res.cloudinary.com/dtmp7op6k/image/upload/v1710742127/Screenshot_2024-03-18_113553_hxqjwu.png"
      }
      className={"w-full"}
      alt={"Banner"}
    />
  );
};

export default Banner;
