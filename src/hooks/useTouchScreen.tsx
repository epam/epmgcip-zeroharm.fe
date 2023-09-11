import { useEffect, useState } from "react";

export function useTouchScreen() {
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  useEffect(() => {
    function handleTouchStart() {
      setIsTouchScreen(true);
    }

    function handleClick() {
      setIsTouchScreen(false);
    }

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const checkIsTouchScreen = () => {
      const hasMaxTouchPoints = navigator.maxTouchPoints > 0;
      const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
      setIsTouchScreen(hasMaxTouchPoints || hasCoarsePointer);
    };

    checkIsTouchScreen();
    window.addEventListener("resize", checkIsTouchScreen);

    return () => window.removeEventListener("resize", checkIsTouchScreen);
  }, []);

  return isTouchScreen;
};
