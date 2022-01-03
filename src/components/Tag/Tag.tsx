import React from "react";

import cx from "classnames";

interface TagProps {
  name: string;
  className?: string;
}

const Tag: React.FC<TagProps> = (props): JSX.Element => {
  return (
    <div
      className={cx(
        "bg-gray-200 shadow-lightGreen shadow-md  text-darkBlue rounded-sm px-3 text-xs font-mono whitespace-nowrap",
        props.className
      )}
    >
      {props.name}
    </div>
  );
};

export default Tag;
