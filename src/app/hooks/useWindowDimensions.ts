import { useState, useEffect } from "react";
type WindowDimensions = {
  width: number | null;
  height: number | null;
};
export default function useWindowDimensions(): WindowDimensions {
  function getWindowDimensions(): WindowDimensions {
    if (typeof window === "undefined") {
      return { width: 768, height: 1024 };
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
