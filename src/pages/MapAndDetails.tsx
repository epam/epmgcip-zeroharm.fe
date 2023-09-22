import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { Aside, MainMapAndFooter } from "@Components";
import { useDetectWidth } from "@Hooks";

export const MapAndDetails: FC = () => {
  const { isLargerThan600 } = useDetectWidth();

  return (
    <Flex
      height="100%"
      maxW="var(--maxContentWidth)"
      minH="400px"
      mx="auto"
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "initial" }}
    >
      <Aside />
      { isLargerThan600 && <MainMapAndFooter /> }
    </Flex>
  );
};
