import { FC } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Aside, Map, Footer } from "@Components";
import { useDetectWidth } from "@Hooks";

const containerHeight = {
  base: "auto",
  md: "calc(100vh - var(--headerHeight) - var(--footerHeight))",
  lg: "calc(100vh - var(--headerHeight))"
};

export const MapAndDetails: FC = () => {
  const { isLargerThan1024 } = useDetectWidth();

  return (
    <Flex
      height={containerHeight}
      maxW="var(--maxContentWidth)"
      minH="400px"
      mx="auto"
      flex="1"
      direction={{
        base: "column",
        md: "row"
      }}
      align={{
        base: "center",
        md: "initial"
      }}
    >
      <Aside />

      <Box
        as="main"
        height={{
          base: "400px",
          md: "100%"
        }}
        w={{
          base: "100%",
          md: "auto"
        }}
        flex="1"
        pos="relative"
      >
        <Map />

        { isLargerThan1024 && <Footer variant="card" /> }
      </Box>
    </Flex>
  );
};
