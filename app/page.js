import { CardSpotlight } from "@/components/CardSpotlight";
import Hero from "@/components/HomeComponents/Hero";
import NewsLetter from "@/components/HomeComponents/NewsLetter";
import NextImage from "@/components/NextImage";
import Container from "@/components/ui/Container";

import React from "react";

const Home = () => {
  return (
    <main>
      <Hero />

      <Container
        className={"flex justify-between flex-col gap-20 mt-10 animate_in"}
      >
        <h3 className="text-gradient font-semibold text-3xl text-center">
          Features of the app
        </h3>

        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-gradient text-xl font-semibold">Profile</h4>
            <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              View your profile, edit your profile, change your profile picture
              and more.
            </p>
          </div>
          <CardSpotlight hoverEffect>
            <NextImage
              height={"100%"}
              width={"100%"}
              src={
                "https://res.cloudinary.com/dtmp7op6k/image/upload/v1711648277/Screenshot_2024-03-28_232017_fp16nn.png"
              }
              alt={"Banner"}
            />
          </CardSpotlight>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-gradient text-xl font-semibold">Add Project</h4>
            <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              Add a project to the platform
            </p>
          </div>
          <CardSpotlight hoverEffect>
            <NextImage
              height={"100%"}
              className="rounded-md"
              width={"100%"}
              src={
                "https://res.cloudinary.com/dtmp7op6k/image/upload/v1711648301/Screenshot_2024-03-28_232051_wmnzvl.png"
              }
              alt={"Banner"}
            />
          </CardSpotlight>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-gradient text-xl font-semibold">
              Add Social Links
            </h4>
            <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              Add your social links to your profile
            </p>
          </div>
          <CardSpotlight hoverEffect>
            <NextImage
              height={"100%"}
              className="rounded-md"
              width={"100%"}
              src={
                "https://res.cloudinary.com/dtmp7op6k/image/upload/v1711648328/Screenshot_2024-03-28_232146_eoargs.png"
              }
              alt={"Banner"}
            />
          </CardSpotlight>
        </div>
      </Container>
      <NewsLetter />
    </main>
  );
};

export default Home;
