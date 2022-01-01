import React, { useEffect } from "react";

interface DrawerProps {
  isVisible: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = (props): JSX.Element => {
  useEffect(() => {
    document.body.style.overflow = props.isVisible ? "hidden" : 'auto'
  }, [props.isVisible]);

  return (
    <React.Fragment>
      <aside
        className={`transform top-0 right-0 w-64 backdrop-blur-sm bg-darkBlue fixed h-full overflow-auto ease-in-out transition-all duration-300 z-40 ${
          props.isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {props.children}
      </aside>
      <div
        className={`transform top-0 left-0 w-full backdrop-blur-sm bg-white/10 fixed h-full overflow-auto z-30 ${
          props.isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={props.onClose}
      />
    </React.Fragment>
  );
};

export default Drawer;
