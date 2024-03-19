import React from "react";
import Navigation from "./Navigation";
import BottomNav from "./BottomNav";

const layout = ({ children,params }) => {
  return (
    <div>
      <Navigation />
      {children}
      <BottomNav />
    </div>
  );
};

export default layout;
