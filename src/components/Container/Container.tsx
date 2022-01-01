import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  id?: string,
  className?: string;
}

const Container: React.FC<ContainerProps> = (props): JSX.Element => {
  return (
    <div className={`px-5 ${props.className || ''}`} id={props.id}>
      <div className="sm:w-12/12 md:w-10/12 lg:w-7/12 mx-auto grid grid-cols-12 pt-24">
        {props.children}
      </div>
    </div>
  );
};

export default Container;
