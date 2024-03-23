import React from "react";

const page = () => {
  return (
    <div className="backdrop-blur-md fixed flex justify-center items-center w-screen h-screen z-50">
      <div className="fixed top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      </div>
    </div>
  );
};

export default page;
