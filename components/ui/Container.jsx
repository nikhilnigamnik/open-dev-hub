import React from "react";

const Container = ({ children, className }) => {
  return (
    <section className={`${className}`}>
      {children}
    </section>
  );
};

export default Container;
