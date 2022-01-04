import React from "react";
import Image from "next/image";

import { Container, Tag } from "@components/index";
import { MENU } from "@constants/index";
import useMediaQuery from "@hooks/useMediaQuery";

interface DetailProjectProps {
  title: string;
  nameApp: string;
  description: string;
  tags: string[];
}

const DetailProject: React.FC<DetailProjectProps> = (props): JSX.Element => {
  return (
    <div>
      <p className="font-mono text-lightGreen text-sm">{props.title}</p>
      <p className="font-bold font-sans">{props.nameApp}</p>
      <div className="mt-2 p-4 rounded-lg bg-white/10">
        <p className="text-white/70">{props.description}</p>
      </div>
      <div className="flex flex-wrap gap-y-2 mt-2">
        {props.tags.map((tag, index) => {
          return <Tag name={tag} key={index} className="mr-2" />;
        })}
      </div>
    </div>
  );
};

const Work: React.FC = (): JSX.Element => {
  const isMobile = useMediaQuery(768);
  return (
    <Container id={MENU.WORK} className="py-10 sm:py-24 pt-24">
      <div className="whitespace-nowrap col-span-12 flex font-bold font-sans text-2xl mb-4 text-gray-200 items-center">
        <span className="text-lightGreen pr-2 font-mono text-lg">#3.</span>
        {isMobile ? (
          <h3>{`My Work's`} ⚡</h3>
        ) : (
          <h3>{`Some Things I've Built`} ⚡</h3>
        )}
      </div>
      <div className="col-span-12 grid grid-cols-12 gap-y-0 md:gap-y-20">
        <div className="col-span-12 md:col-span-6 flex items-center justify-center py-5 pr-5">
          <Image
            src="/images/commandmc-applet.png"
            alt="command-mc-applet"
            width={429}
            height={244}
            quality={100}
          />
        </div>
        <div className="col-span-12 md:col-span-6 mb-10 sm:mb-0 flex items-center">
          <DetailProject
            title="Feature Project"
            nameApp="CommandMC Applet"
            description="A web app developed under micro front-end architecture. the
            platform handling several features that are recruiting pipeline,
            find recruit, report goals, recruit associates, recruit management
            and many more."
            tags={["React", "Next", "Express", "Micro-Frontend"]}
          />
        </div>
        <div className="col-span-12 md:col-span-6 order-last md:order-none mb-10 sm:mb-0">
          <DetailProject
            title="Feature Project"
            nameApp="Asset Management"
            // eslint-disable-next-line max-len
            description="A web app maintaining asset management. create a new asset, reporting management, locations. inventory, user management, warrantly, interactive dashboard analytics and etc.."
            tags={["React", "Next", "Redux", "Metronic Theme"]}
          />
        </div>
        <div className="col-span-12 md:col-span-6 py-5 pl-5 flex justify-end">
          <Image
            src="/images/assetdata.png"
            alt="assetdata"
            width={429}
            height={244}
            quality={100}
          />
        </div>
      </div>
    </Container>
  );
};

export default Work;
