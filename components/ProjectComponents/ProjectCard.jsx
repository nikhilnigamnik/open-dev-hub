import React from "react";
import { CardSpotlight } from "../CardSpotlight";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { CiMedicalClipboard } from "react-icons/ci";
import { useCopyToClipboard } from "usehooks-ts";
import { toast } from "sonner";
import Link from "next/link";

const ProjectCard = ({ data }) => {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = (text) => {
    copy(text);
    toast("Copied : " + copiedText, {
      type: "success",
    });
  };
  return (
    <div className="flex animate_in  flex-col gap-4">
      {data.map((el) => (
        <CardSpotlight className={"lg:w-4/6 w-full"} key={el?._id} hoverEffect>
          <div className="flex items-center gap-4 justify-between">
            <div className="flex items-center gap-4 ">
              <Image
                src={el?.user?.image}
                alt="avatar"
                height={30}
                width={30}
                className="rounded-full"
              />
              <p>{el?.user?.name}</p>
            </div>
            <div className="flex items-center gap-4 ">
              <Link href={el?.repoLink}>
                <Badge>Repo</Badge>
              </Link>
              <Link href={el?.projectLink}>
                <Badge>Visit</Badge>
              </Link>
            </div>
          </div>

          <p className="text-lg font-bold text-gradient">{el?.title}</p>
          <p className="text-gray-200">{el?.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 ">
              {el?.tags.map((tag, index) => (
                <Badge key={index}>{tag}</Badge>
              ))}
            </div>

            <CiMedicalClipboard
              className="cursor-pointer text-border"
              onClick={() => handleCopy(el?.repoLink)}
              size={24}
            />
          </div>
        </CardSpotlight>
      ))}
    </div>
  );
};

export default ProjectCard;
