import React, { useState } from "react";
import Image from "next/image";
import { AlignRight, X } from "react-feather";

import { Drawer } from "@components/index";
import { LIST_MENU } from "@constants/index";

const Menus: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 font-mono text-xs items-center justify-center h-full">
      {LIST_MENU.map((menu, index) => {
        return (
          <a key={menu} href={`#${menu}`} className="capitalize">
            <span className="text-lightGreen pr-2">#{index + 1}.</span>
            {menu}
          </a>
        );
      })}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpenDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <React.Fragment>
      <Drawer isVisible={isOpenDrawer} onClose={() => setOpenDrawer(false)}>
        <React.Fragment>
          <div className="p-5 absolute right-0">
            <X
              className="cursor-pointer text-gray-50 hover:text-gray-200"
              onClick={() => setOpenDrawer(false)}
            />
          </div>
          <Menus />
        </React.Fragment>
      </Drawer>
      <div className="px-5 md:px-12 py-5 md:py-8 fixed flex justify-between items-center w-full  bg-darkBlue">
        <div>
          <Image
            src="/images/logo.png"
            alt="hellotoms-logo"
            width={140}
            height={25}
            quality={100}
          />
        </div>
        <div className="block sm:hidden">
          <AlignRight
            className="text-gray-200 cursor-pointer"
            onClick={() => setOpenDrawer(true)}
          />
        </div>
        <div className="hidden sm:block">
          <Menus />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
