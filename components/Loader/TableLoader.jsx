import React from "react";
import { Skeleton } from "../ui/skeleton";

const TableLoader = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className={"w-full h-4 rounded-lg"} />
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <Skeleton key={i} className="w-full h-10 rounded-lg" />
        ))}
    </div>
  );
};

export default TableLoader;
