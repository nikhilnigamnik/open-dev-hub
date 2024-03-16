import React from "react";

const Container = ({ children, className }) => {
  return (
    <section className={`px-4 max-w-7xl m-auto ${className}`}>
      {children}
    </section>
  );
};

export default Container;
