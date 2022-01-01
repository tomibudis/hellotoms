import React from "react";
import Image from "next/image";

import { Container } from "@components/index";
import { MENU, SKILLS } from "@constants/index";
import { Navigation2 } from "react-feather";
import useBrowserAgent from "@hooks/useBrowserAgent";
import useMediaQuery from "@hooks/useMediaQuery";

const About: React.FunctionComponent = (): JSX.Element => {
  const { isSafari } = useBrowserAgent();
  const isMobile = useMediaQuery(768);
  return (
    <Container id={MENU.ABOUT} className="mb-80 md:mb-20">
      <div className="col-span-12 flex font-bold font-sans text-2xl mb-4 text-gray-200">
        <span className="text-lightGreen pr-2">#1.</span>
        <h3>About Me ⚡</h3>
      </div>
      <div className="col-span-12 md:col-span-8 mb-20">
        <p className="font-sans text-gray-300 pr-10">
          Hello! My name is Tomi who loves to explore new things and the
          begining of my motivation for being interested in this section is
          to make it fun when creating component used HTML & CSS. and it makes
          me addicted! :). Actually sometimes I also work for back-end stuff, but for now my preferred work I choose the front-end side
        </p>
        <p className="font-sans text-gray-300 pr-10 mt-3">
          Fast-forward to today. I work for a big company and currently
          my main focus are developing new features and maintaining the platform under micro front-end architecture.
          beside that I also often to create a cool stuff and you
          can see on my resume.
        </p>
        <p className="font-sans text-gray-300 pr-10 mt-3">
          I also recently create galaxy-labs that is react component library for
          front-end needs to get faster during development. the product doesn’t
          finish yet but I actively to provide new beutifull component over
          time.
        </p>
        <p className="font-sans text-gray-300 pr-10 mt-3">
          Here are a few technologies that I’ve been used recently:
        </p>
        <div className="font-sans text-gray-300 grid grid-rows-3 grid-flow-col gap-1 mt-3">
          {SKILLS.map((skill, index) => {
            return (
              <p key={index} className="flex items-center">
                <Navigation2
                  size={14}
                  className="rotate-90 text-lightGreen mr-2"
                />
                {skill}
              </p>
            );
          })}
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 flex md:items-center justify-center relative">
        <div className="absolute md:right-0 z-10 md:mr-10 md:hover:mr-5 md:hover:-mt-5 ease-in-out transition-all duration-300">
          <Image
            src="/images/profile-picture.png"
            alt="profile-picture"
            width={259}
            height={259}
            quality={100}
          />
        </div>
        {!(isSafari && isMobile) && (
          <div className="absolute md:right-0 z-0 mt-5 mr-10 md:-mt-10 md:mr-0 md:ml-5 md:mb-10">
            <Image
              src="/images/decoration.png"
              alt="decoration"
              width={259}
              height={259}
              quality={100}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default About;
