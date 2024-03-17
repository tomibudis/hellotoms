import React from "react";

import { Navigation2 } from "react-feather";
import cx from "classnames";

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

const List: React.FC<ListProps> = (props): JSX.Element => {
  return (
    <p
      className={cx(
        "flex items-start font-mono text-white/70 mb-2 text-sm",
        props.className
      )}
    >
      <span style={{ marginTop: "0.40rem" }}>
        <Navigation2 size={14} className="rotate-90 text-lightGreen mr-2" />
      </span>
      {props.children}
    </p>
  );
};

export default List;
