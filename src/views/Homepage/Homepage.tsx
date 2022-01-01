import React from "react";

import { Button } from "@components/index";

const Homepage: React.FC = (): JSX.Element => {
  return (
    <div className="px-5 md:px-5 flex flex-col justify-center items-center min-h-screen sm:w-12/12 md:w-10/12 lg:w-7/12 mx-auto">
      <div className="">
        <p className="text-lightGreen pb-3 font-mono">Hi 👋 , my name is</p>
        <h1 className="font-bold font-sans text-2xl md:text-7xl tracking-wide text-gray-300">
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
    </div>
  );
};

export default Homepage;
