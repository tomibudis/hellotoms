import { Card } from "@components/index";
import { EXTERNAL_LINK } from "@constants/index";
import { ExternalLink as ExternalLinkIcon } from "react-feather";
import React from "react";

const ExternalLink = () => {
  return (
    <div className="lg:min-h-screen flex flex-col justify-center items-start gap-4 text-center grow">
      <Card>
        <a href={EXTERNAL_LINK.BLOG} rel="noreferrer" target="_blank">
          <div className="flex items-center">
            <p className="pr-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              My Blog
            </p>
            <ExternalLinkIcon size={14} />
          </div>
        </a>
      </Card>

      <Card>
        <a href={EXTERNAL_LINK.ALGORITHM} rel="noreferrer" target="_blank">
          <div className="flex items-center">
            <p className="pr-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Algorithm
            </p>
            <ExternalLinkIcon size={14} />
          </div>
        </a>
      </Card>
    </div>
  );
};

export default ExternalLink;
