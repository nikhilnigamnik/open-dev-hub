"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  style,
  className,
  hoverEffect = false,
  ...props
}) => {
  const [opacity, setOpacity] = React.useState(0);
  const [position, setPosition] = React.useState({
    x: 0,
    y: 0,
  });
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      className={cn(
        "rounded-xl relative flex flex-col gap-4 shadow-lg  border border-border bg-secondary bg-cover overflow-hidden group",
        className
      )}
      {...props}
      style={style}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 transition-all duration-200 rounded-lg opacity-0 pointer-events-none blur-3xl"
        style={{
          opacity,
          background: hoverEffect
            ? `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(191, 219, 254, 0.1), transparent)`
            : "transparent",
        }}
      ></div>
      {children}
    </div>
  );
};
