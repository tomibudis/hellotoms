import React from "react";
import cx from "classnames";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cx(
        "bg-[#081839] cursor-pointer z-10 w-full border-2 border-slate-500 rounded-lg p-4 shadow-lg hover:shadow-cyan-500/50 px-[60px]",
        className
      )}
    >
      <div className="flex justify-center items-center  w-full">{children}</div>
    </div>
  );
};

export default Card;
