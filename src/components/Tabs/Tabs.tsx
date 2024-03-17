import React from "react";

import cx from "classnames";

interface TabsProps {
  menu: string[];
  currentActive?: string;
  onChange: (menu: string) => void;
}

const Tabs: React.FC<TabsProps> = (props): JSX.Element => {
  return (
    // eslint-disable-next-line max-len
    <ul className="whitespace-nowrap col-span-12 sm:col-span-3 md:col-span-3 lg:col-span-4 xl:col-span-3 text-xs overflow-x-auto inline-flex sm:flex sm:flex-col">
      {props.menu.map((menu, index) => {
        return (
          <li
            onClick={() => props.onChange(menu)}
            key={index}
            className={cx(
              "ease-in-out transition-all duration-300 cursor-pointer py-4 sm:py-2 px-3 border-b-2 sm:border-b-0 border-l-0 sm:border-l-2",
              {
                "border-lightGreen text-lightGreen":
                  props.currentActive === menu,
                "border-white/60 text-white/60": props.currentActive !== menu,
              }
            )}
          >
            {menu}
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
