import { useMediaQuery } from "@chakra-ui/react";

export const useIncludeHover = () => {
  const [shouldIncludeHover] = useMediaQuery("(hover: hover) and (pointer: fine)", { ssr: false });

  return shouldIncludeHover;
};
