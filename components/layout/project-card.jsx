"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CardSpotlight } from "../CardSpotlight";
import NextImage from "../NextImage";
import { BadgeCheck, Search, SlidersHorizontal, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { debounce } from "lodash";
import { Drawer, DrawerContent } from "../ui/drawer";

export default function ProjectCard({ data, language }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filteredData = data.filter(
    (el) =>
      el.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLanguage === "" || el.language === selectedLanguage)
  );

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLanguage = (lang) => {
    setSelectedLanguage(lang);
    setDrawerOpen(false);
  };

  const handleSearch = debounce((term) => {
    setSearchTerm(term);
  }, 300);

  const handleClear = () => {
    setSelectedLanguage("");
  };

  useEffect(() => {
    const handle = (e) => {
      handleSearch(e.target.value);
    };

    return () => handleSearch.cancel();
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-3">
        <div className="relative flex gap-4 hover:ring-1 hover:ring-gray-500 rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none focus:ring-4 focus:ring-gray-500 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full md:w-fit  w-full">
          <Search color="#6b7280" />
          <input
            type="text"
            className="outline-none bg-transparent w-full"
            placeholder="Search projects..."
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          {selectedLanguage && (
            <Badge className={"cursor-pointer"} onClick={handleClear}>
              {selectedLanguage}
            </Badge>
          )}
          <div
            onClick={handleDrawer}
            className="bg-secondary cursor-pointer p-2 rounded-full border-border border"
          >
            <SlidersHorizontal color="#6b7280" />
          </div>
        </div>
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
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent>
          <div className="text-center max-w-lg mx-auto flex flex-col gap-4 mt-4 px-4">
            <p className="text-white">Filter by Language</p>
            <div className="flex flex-wrap gap-2 justify-center items-center">
              {language.map((el, idx) => (
                <Badge
                  variant={
                    el.language === selectedLanguage ? "secondary" : "default"
                  }
                  key={idx}
                  onClick={() => handleLanguage(el?.language)}
                  className="cursor-pointer"
                >
                  {el.language}
                </Badge>
              ))}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
}
