import React from "react";
import Navigation from "./Navigation";
import BottomNav from "./BottomNav";

const layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <BottomNav />
    </div>
  );
};

export default layout;
