import React from "react";
import cx from "classnames";
import { Folder, GitHub, ExternalLink } from "react-feather";

interface CardProps {
  title: string;
  link?: string;
  github?: string;
  description: string;
  tags?: string[];
}

const Card: React.FC<CardProps> = (props): JSX.Element => {
  return (
    <div className={cx("bg-white/10", "rounded-lg p-4 h-full")}>
      <div className="flex justify-between w-full mb-3">
        <Folder className="text-lightGreen" size={40} />
        <div className="flex flex-1 justify-end">
          {props.github && (
            <a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-white/70 ml-2"
            >
              <GitHub />
            </a>
          )}
          {props.link && (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-white/70 ml-2"
            >
              <ExternalLink />
            </a>
          )}
        </div>
      </div>
      <p className="font-sans font-bold">{props.title}</p>
      <p className="font-sans text-white/70 mt-2">{props.description}</p>
      <p className="font-mono text-xs mt-4">[{props.tags?.join()}]</p>
    </div>
  );
};

export default Card;
