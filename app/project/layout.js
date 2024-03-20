import React from "react";
import Navigation from "../../components/Navigation";
import BottomNav from "../../components/BottomNav";

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
