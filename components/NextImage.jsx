"use client";

import Image from "next/image";
import React from "react";

const NextImage = ({ src, width, height, alt }) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(true);
  return (
    <Image
      src={src}
      width={width}
      onLoad={() => setIsImageLoaded(false)}
      height={height}
      className={`${isImageLoaded ? "blur" : "remove-blur rounded-md"}`}
      alt={alt}
    />
  );
};

export default NextImage;
