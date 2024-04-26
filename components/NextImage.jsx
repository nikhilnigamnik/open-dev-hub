"use client";

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const NextImage = ({ height, width, src, alt, className }) => {
  return (
    <LazyLoadImage
      effect="blur"
      height={height}
      className={className || "rounded-md"}
      width={width}
      src={src}
      alt={alt}
    />
  );
};

export default NextImage;
