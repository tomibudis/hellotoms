import React from "react";

import { Container, Button } from "@components/index";
import { MENU } from "@constants/index";
import { Instagram, GitHub, Linkedin } from "react-feather";

const Contact: React.FC = (): JSX.Element => {
  return (
    <Container id={MENU.CONTACT}>
      <div className="col-span-12 grid grid-cols-12 h-[600px] items-center text-center">
        <div className="col-span-10 md:col-span-6 col-start-2 md:col-start-4">
          <h4 className="font-bold text-2xl font-sans mb-4 text-white/90">
            Get In Touch
          </h4>
          <p className="font-sans text-white/70 text-sm">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <Button className="mt-8">Say Hello</Button>
        </div>
      </div>
      <div className="col-span-12 h-[50px] flex flex-col justify-center items-center">
        <div className="flex font-mono text-sm">
          <div className="flex mx-2 items-center">
            <Instagram size={14} className="mx-1" />
            <a>
              Instagram
            </a>
            {/* https://instagram.com/tomi_budi */}
          </div>
          <div className="flex mx-2 items-center">
            <GitHub size={14} className="mx-1"/>
            <a>Github</a>
            {/* https://github.com/tomibudis */}
          </div>
          <div className="flex mx-2 items-center">
            <Linkedin size={14} className="mx-1"/>
            <a>LinkedIn</a>
            {/* https://linkedin.com/tomi_budi */}
          </div>
        </div>
        <div className="mb-5 mt-2 text-xs font-mono">@2022 Hellotoms.com</div>
      </div>
    </Container>
  );
};

export default Contact;
