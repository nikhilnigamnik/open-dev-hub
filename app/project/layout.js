import React from "react";
import Navigation from "../../components/Sidebar";
import BottomNav from "../../components/BottomNav";

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
