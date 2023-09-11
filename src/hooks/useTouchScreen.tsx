import { useEffect, useState } from "react";

export function useTouchScreen() {
  const [isTouchScreen, setIsTouchScreen] = useState(false);

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
