import { useState, useRef, useEffect } from "react";

const INTERVAL = 3000;
const INITIAL_CURRENT_INDEX = 0;

export const useSwiper = (elementsCount: number) => {
  const [currentIndex, setCurrentIndex] = useState(INITIAL_CURRENT_INDEX);
  const intervalIdRef = useRef<ReturnType<typeof setInterval> | undefined>();

  useEffect(() => {
    const evaluateNextCurrentIndex = (currentIndex: number) => {
      if (currentIndex < elementsCount - 1) {
        return ++currentIndex;
      }

      return INITIAL_CURRENT_INDEX;
    };

    const updateCurrentIndex = () => {
      setCurrentIndex(evaluateNextCurrentIndex);
    };

    if (elementsCount) {
      intervalIdRef.current = setInterval(updateCurrentIndex, INTERVAL);
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [elementsCount]);

  return currentIndex;
};
