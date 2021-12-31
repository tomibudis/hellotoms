import React from "react";

const Homepage: React.FC = (): JSX.Element => {
  return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="w-6/12">
          <p className="text-lightGreen pb-3">Hi 👋 , my name is</p>
          <h1 className="font-bold text-5xl">
            Tomi Budi<br /> {`I'm a Software Engineer`}
          </h1>
          <p className="mt-4 w-8/12">Javascript enthusiast and love build something with reactjs. Currently I work as Front-end engineer focus to building pixel perfect of user interface with hightly code quality, definitely enhance with unit test as well</p>
        </div>
      </div>
  );
};

export default Homepage;
