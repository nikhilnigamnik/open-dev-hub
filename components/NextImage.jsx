"use client";

import React, { useState } from "react";

const NextImage = ({ height, width, src, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      style={{
        filter: imageLoaded ? "none" : "blur(20px)",
        transition: "filter 0.5s ease",
      }}
    >
      <img
        loading="lazy"
        height={height || "100%"}
        className={className || "rounded-md"}
        width={width || "100%"}
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

export default NextImage;
