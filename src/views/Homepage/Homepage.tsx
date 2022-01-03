import React from "react";

import { Button, Container } from "@components/index";
import { MENU } from "@constants/index";

const Homepage: React.FC = (): JSX.Element => {
  return (
    <Container id={MENU.HOMEPAGE}>
      <div className="col-span-12 min-h-screen flex flex-col justify-center items-start">
        <p className="text-lightGreen pb-3 font-mono">Hi 👋 , my name is</p>
        <h1 className="font-bold font-sans text-2xl lg:text-5xl xl:text-7xl tracking-wide text-gray-300">
          Tomi Budi
          <br /> {`I'm a Software Engineer`}
        </h1>
        <div className="sm:w-8/12 md:w-8/12">
          <p className="mt-4 text-gray-400">
            Javascript enthusiast and love build something with reactjs. Currently
            I work as Front-end engineer focus to building pixel perfect of user
            interface with hightly code quality, definitely enhance with unit test
            as well
          </p>
        </div>
        <Button className="mt-5 px-6 font-mono">My Resume</Button>
      </div>
    </Container>
  );
};

export default Homepage;
