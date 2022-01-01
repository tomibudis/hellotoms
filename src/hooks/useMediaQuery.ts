import { useEffect, useState } from "react";

const useMediaQuery = (minWidth: number) => {

  const [state, setState] = useState({
    windowWidth: typeof window !== "undefined" ? window.innerWidth : 1080,
    isDesiredWidth: false,
  });

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      const isDesiredWidth = currentWindowWidth < minWidth;
      setState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [state.windowWidth, minWidth]);

  return state.isDesiredWidth;
};

export default useMediaQuery;