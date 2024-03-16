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
        "rounded-lg relative p-3 flex flex-col gap-4 shadow-lg bg-zinc-950 border border-zinc-900 bg-cover overflow-hidden group",
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
        className="absolute inset-0 transition-all duration-200 rounded-lg opacity-0 pointer-events-none"
        style={{
          opacity,
          background: hoverEffect
            ? `radial-gradient(200px circle at ${position.x}px ${position.y}px, #ffffff10, transparent)`
            : "transparent",
        }}
      ></div>
      {children}
    </div>
  );
};
