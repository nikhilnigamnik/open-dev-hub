import { CardSpotlight } from "@/components/CardSpotlight";
import NextImage from "@/components/NextImage";
import Hero from "@/components/home-components/Hero";
import NewsLetter from "@/components/home-components/NewsLetter";
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
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center gap-8">
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
                "https://res.cloudinary.com/dtmp7op6k/image/upload/v1712081371/Screenshot-2024-04-02-215918_wzaidz.avif"
              }
              alt={"Banner"}
            />
          </CardSpotlight>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center gap-8 ">
          <CardSpotlight hoverEffect>
            <NextImage
              height={"100%"}
              className="rounded-md"
              width={"100%"}
              src={
                "https://res.cloudinary.com/dtmp7op6k/image/upload/v1712081365/Screenshot-2024-04-02-215933_twa0xe.avif"
              }
              alt={"Banner"}
            />
          </CardSpotlight>
          <div>
            <h4 className="text-gradient text-xl font-semibold">Add Project</h4>
            <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              Add a project to the platform
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center gap-8">
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
                "https://res.cloudinary.com/dtmp7op6k/image/upload/v1712081369/Screenshot-2024-04-02-220720_dtoilz.avif"
              }
              alt={"Banner"}
            />
          </CardSpotlight>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center gap-8">
          <CardSpotlight hoverEffect>
            <NextImage
              height={"100%"}
              className="rounded-md"
              width={"100%"}
              src={
                "https://res.cloudinary.com/dtmp7op6k/image/upload/v1712081372/Screenshot-2024-04-02-232011_njf29e.avif"
              }
              alt={"Banner"}
            />
          </CardSpotlight>
          <div>
            <h4 className="text-gradient text-xl font-semibold">
              See Devs Profile
            </h4>
            <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              View other developers profile
            </p>
          </div>
        </div>
      </Container>
      <NewsLetter/>
    </main>
  );
};

export default Home;
