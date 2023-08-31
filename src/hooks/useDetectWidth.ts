import { useMediaQuery } from "@chakra-ui/react";
import { minTabletWidth, minDesktopWidth } from "@Theme/foundations/breakpoints";

export const useDetectWidth = () => {
  const mediaQueries = [minTabletWidth, minDesktopWidth].map(breakpoint => `(min-width: ${breakpoint})`);

  const [isLargerThan600, isLargerThan1024] = useMediaQuery(mediaQueries);

  return {
    isLargerThan600,
    isLargerThan1024
  };
};
