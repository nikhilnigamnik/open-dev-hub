import React from "react";
import { CardSpotlight } from "../CardSpotlight";
import { Badge } from "../ui/badge";
import Image from "next/image";

const ProjectCard = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((el) => (
        <CardSpotlight className={"lg:w-4/6 w-full"} key={el?._id} hoverEffect>
          <div className="flex items-center gap-4">
            <Image
              src={el?.user?.image}
              alt="avatar"
              height={30}
              width={30}
              className="rounded-full"
            />
            <p>{el?.user?.name}</p>
          </div>
          <p className="text-lg font-bold text-gradient">{el?.title}</p>
          <p className="text-gray-200">{el?.description}</p>
          <p className="text-gray-200">{el?.link}</p>
          <div className="flex gap-3">
            {el?.tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>
        </CardSpotlight>
      ))}
    </div>
  );
};

export default ProjectCard;
