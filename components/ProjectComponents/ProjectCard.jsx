import React from "react";

const ProjectCard = ({ children }) => {
  return (
    <div className="p-2 rounded-xl border border-border bg-secondary">
      {children}
    </div>
  );
};

export default ProjectCard;
