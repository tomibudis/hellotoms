import React from "react";

import {
  BlurBackgroundOrnament,
  Button,
  Container,
  PolkaDotOrnament,
} from "@components/index";
import { MENU } from "@constants/index";
import { Download } from "react-feather";
import ExternalLink from "./ExternalLink";

const Homepage: React.FC = (): JSX.Element => {
  return (
    <Container id={MENU.HOMEPAGE}>
      <div className="min-h-screen flex flex-col justify-center items-start col-span-12 lg:col-span-9">
        <p className="text-lightGreen pb-3 font-mono">Hi 👋 , my name is</p>
        <h1 className="font-extrabold font-sans text-xl lg:text-3xl xl:text-5xl tracking-wide text-gray-300">
          Tomi Budi
          <br /> {`I'm a Software Engineer`}
        </h1>
        <div className="sm:w-8/12 md:w-8/12">
          <p className="mt-4 text-gray-400">
            As a passionate JavaScript developer, I have a strong interest in
            building dynamic and engaging user interfaces using ReactJS. In my
            current role as a front-end engineer, I specialize in creating
            visually stunning designs that are not only easy on the eyes, but
            also built with the highest standards of code quality. I take great
            pride in ensuring that my work is thoroughly tested, to provide a
            seamless user experience.
          </p>
        </div>
        <a href="/CurriculumVitae2022_compressed.pdf" target="_blank">
          <Button className="mt-5 px-6 font-mono flex items-center animate-bounce w-200">
            Download CV
            <div className="ml-2">
              <Download size={20} />
            </div>
          </Button>
        </a>

        <div className="hidden lg:flex">
          <PolkaDotOrnament className="absolute right-40 top-60" />
        </div>

        <BlurBackgroundOrnament />

        {/* only on Mobile version */}
        <div
          className="flex lg:hidden mt-10"
          style={{ width: "-webkit-fill-available" }}
        >
          <PolkaDotOrnament className="absolute right-10 top-[520px]" />
          <ExternalLink />
        </div>
      </div>
      {/* only on Web version */}
      <div
        className="hidden lg:flex col-span-3"
        style={{ width: "-webkit-fill-available" }}
      >
        <ExternalLink />
      </div>
    </Container>
  );
};

export default Homepage;
