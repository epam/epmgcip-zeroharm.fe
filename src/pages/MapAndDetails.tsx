import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { Aside, MainMapAndFooter } from "@Components";
import { useDetectWidth } from "@Hooks";

const containerHeight = {
  base: "calc(100vh - var(--headerMobileHeight))",
  md: "calc(100vh - var(--headerHeight) - var(--footerHeight))",
  lg: "calc(100vh - var(--headerHeight))"
};

export const MapAndDetails: FC = () => {
  const { isLargerThan600 } = useDetectWidth();

  return (
    <Flex
      height={containerHeight}
      maxW="var(--maxContentWidth)"
      minH="400px"
      mx="auto"
      flex="1"
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "initial" }}
    >
      <Aside />

      { isLargerThan600 && <MainMapAndFooter /> }
    </Flex>
  );
};
