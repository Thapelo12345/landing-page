import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    Width: window.innerWidth,
    Height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        Width: window.innerWidth,
        Height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {window.removeEventListener("resize", handleResize)}
  }, []);

  return windowSize;
}
