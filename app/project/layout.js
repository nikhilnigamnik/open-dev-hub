import React from "react";
import Navigation from "../../components/Sidebar";
import BottomNav from "../../components/BottomNav";

const layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="xl:w-11/12 w-full">{children}</div>
      <BottomNav />
    </div>
  );
};

export default layout;
