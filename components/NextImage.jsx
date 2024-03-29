"use client";

import React from "react";

const NextImage = ({ src, width, height, alt }) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(true);
  return (
    <img
      loading="lazy"
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
