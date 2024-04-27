"use client";

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Avatar = ({ height, width, src, alt, className }) => {
  return (
    <LazyLoadImage
      effect="blur"
      height={height}
      className={"rounded-full h-14 w-14 p-1 bg-secondary"}
      width={width}
      src={src}
      alt={alt}
    />
  );
};

export default Avatar;
