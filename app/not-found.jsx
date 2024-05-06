import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl h-[60vh] lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-gradient">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-400 md:text-4xl ">
            Something's missing.
          </p>
          <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Button>
            <Link href="/">Back to Homepage</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
