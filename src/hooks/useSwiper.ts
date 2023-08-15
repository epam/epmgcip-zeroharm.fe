import { useState, useEffect } from "react";

const INTERVAL = 3000;
const INITIAL_CURRENT_INDEX = 0;

export const useSwiper = (elementsCount: number) => {
  const [currentIndex, setCurrentIndex] = useState(INITIAL_CURRENT_INDEX);

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

    let intervalId: ReturnType<typeof setInterval> | undefined;

    if (elementsCount) {
      intervalId = setInterval(updateCurrentIndex, INTERVAL);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [elementsCount]);

  return currentIndex;
};
