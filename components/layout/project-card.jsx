"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CardSpotlight } from "../CardSpotlight";
import NextImage from "../NextImage";
import { BadgeCheck, Search, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { debounce } from "lodash";

export default function ProjectCard({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const debouncedSearch = debounce((term) => {
    const filtered = data.filter((el) =>
      el.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  }, 300);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(data);
    } else {
      debouncedSearch(searchTerm);
    }

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, data]);

  return (
    <section className="flex flex-col gap-4 ">
      <div className="relative flex gap-4 hover:ring-1 hover:ring-gray-500 rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none focus:ring-4 focus:ring-gray-500 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full md:w-fit  w-full">
        <Search color="#6b7280" />
        <input
          type="text"
          className="outline-none bg-transparent"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex animate_in flex-col gap-4">
        {filteredData.map((el) => (
          <CardSpotlight className="p-4" key={el?.id} hoverEffect>
            <Link href={`/project/${el?.slug}`}>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4 justify-between">
                  <div className="flex items-center gap-4">
                    <NextImage
                      src={el?.logo}
                      alt={el?.name}
                      height={30}
                      width={30}
                      className="rounded-full"
                    />
                    <p className="text-gray-300 font-semibold text-lg capitalize">
                      {el?.name}
                    </p>
                    {el?.verified && <BadgeCheck color="#6b7280" size={20} />}
                  </div>
                  <Badge className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-gray-200" />
                    <p>{el?.stars.toLocaleString()}</p>
                  </Badge>
                </div>
                <p className="text-gray-200">{el?.description}</p>
              </div>
            </Link>
          </CardSpotlight>
        ))}

        {filteredData.length === 0 && (
          <div className="flex justify-center items-center h-[40vh]">
            <p className="text-gradient">No Projects Found</p>
          </div>
        )}
      </div>
    </section>
  );
}
