import Link from "next/link";
import React from "react";

const page = () => {
  const blog = "4841fd15b5dfb";
  return (
    <div>
      <Link href={`/blog/${blog}`}>
        <p>page</p>
      </Link>
    </div>
  );
};

export default page;
