import React from "react";
import cx from "classnames";

interface TextProps {
  className?: string;
}
const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <p className={cx("text-gray-300 font-mono text-sm", className)}>
      {children}
    </p>
  );
};

export default Text;
