import { FC } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Aside, Map, Footer } from "@Components";
import { useDetectWidth } from "@Hooks";

const containerHeight = {
  base: "calc(100vh - 56px - var(--footerHeight))",
  md: "calc(100vh - var(--headerHeight) - var(--footerHeight))",
  lg: "calc(100vh - var(--headerHeight))"
};

export const MapAndDetails: FC = () => {
  const { isLargerThan1024 } = useDetectWidth();

  return (
    <Flex
      height={containerHeight}
      maxW="1440px"
      mx="auto"
      flex="1"
    >
      <Aside />

      <Box
        as="main"
        height="100%"
        flex="1"
        pos="relative"
      >
        <Map />

        { isLargerThan1024 && <Footer variant="card" /> }
      </Box>
    </Flex>
  );
};
