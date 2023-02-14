import React from "react";

interface PolkaDotOrnamentProps {
  className?: string;
  width?: string;
  height?: string;
}
const PolkaDotOrnament: React.FC<PolkaDotOrnamentProps> = ({
  className,
  width = "300px",
  height = "300px",
}) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: "radial-gradient(white 1.5px, transparent 0)",
        backgroundSize: "15px 15px",
        backgroundPosition: "-15px -15px",
        width,
        height,
        position: "absolute",
        zIndex: 0,
        opacity: 0.3,
      }}
    />
  );
};

export default PolkaDotOrnament;
