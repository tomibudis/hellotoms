import React from "react";
import Image from "next/image";

import { Container, Text } from "@components/index";
import { MENU, SKILLS } from "@constants/index";
import { Navigation2 } from "react-feather";
import useBrowserAgent from "@hooks/useBrowserAgent";
import useMediaQuery from "@hooks/useMediaQuery";

const About: React.FunctionComponent = (): JSX.Element => {
  const { isSafari } = useBrowserAgent();
  const isMobile = useMediaQuery(768);
  return (
    <Container id={MENU.ABOUT} className="mb-80 md:mb-20 pt-24">
      <div
        data-aos="fade-up"
        className="col-span-12 flex font-bold font-sans text-2xl mb-4 text-gray-200 items-center"
      >
        <span className="text-lightGreen pr-2 font-mono text-lg">#1.</span>
        <h3>About Me ⚡</h3>
      </div>
      <div data-aos="fade-up" className="col-span-12 md:col-span-8 mb-20">
        <div className="md:pr-10">
          <Text>
            Hello! My name is Tomi and I am someone who thrives on exploring new
            things. My motivation for delving into the world of web development
            began with a desire to make creating components with HTML and CSS an
            enjoyable experience. As it turns out, I became quite addicted to
            it! In addition to front-end work, I also have experience working on
            back-end projects.
          </Text>
        </div>
        <div className="md:pr-10 mt-3">
          <Text>
            Currently, I am employed at a large company where my main focus is
            developing new features and maintaining the platform using micro
            front-end architecture. In my free time, I enjoy working on personal
            projects and you can check them out on my resume.
          </Text>
        </div>
        <p className="font-sans text-white/70 md:pr-10 mt-3">
          <Text>
            Recently, I have been working on creating galaxy-labs, which is a
            React component library aimed at helping front-end developers work
            more efficiently. The project is still ongoing, and I am actively
            working on adding more beautiful and useful components.
          </Text>
        </p>
        <div className="md:pr-10 mt-3">
          <Text>
            Some of the technologies that I am currently proficient in include:
          </Text>
        </div>

        <div className="font-sans text-white/70 grid grid-rows-3 grid-flow-col gap-1 mt-3">
          {SKILLS.map((skill, index) => {
            return (
              <Text key={index} className="flex items-center">
                <Navigation2
                  size={14}
                  className="rotate-90 text-lightGreen mr-2"
                />
                {skill}
              </Text>
            );
          })}
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="col-span-12 md:col-span-4 flex md:items-center justify-center relative"
      >
        <div className="absolute md:right-0 z-10 md:mr-10 md:hover:mr-5 md:hover:-mt-5 ease-in-out transition-all duration-300">
          <Image
            src="/images/profile_2024.png"
            alt="profile"
            width={259}
            height={280}
            quality={100}
            className="rounded-lg"
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
