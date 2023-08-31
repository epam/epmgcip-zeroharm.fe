import { Flex, Box } from "@chakra-ui/react";
import { Aside, Map, Footer } from "@Components";
import { useDetectWidth } from "@Hooks";

export const MapAndDetails = () => {
  const { isLargerThan1024 } = useDetectWidth();

  return (
    <Flex
      height={{
        md: "calc(100vh - var(--headerHeight) - var(--footerHeight))",
        lg: "calc(100vh - var(--headerHeight))"
      }}
    >
      <Box
        as="aside"
        flex="1 0 440px"
      >
        <Aside />
      </Box>
      <Box
        as="main"
        height="100%"
        flex="1 0 calc(100% - 440px)"
      >
        <Box
          pos="relative"
          mx="auto"
          height={{
            md: "calc(100vh - var(--headerHeight) - var(--footerHeight))",
            lg: "calc(100vh - var(--headerHeight))"
          }}
        >
          <Map />
          { isLargerThan1024 && (
            <Footer variant="card" />
          ) }
        </Box>
      </Box>
    </Flex>
  );
};
