import { Flex, Box, useMediaQuery } from "@chakra-ui/react";
import { Aside, Map } from "@Components";
import { Footer } from "@UI";
import { maxWidthTablet } from "@Theme/foundations/breakpoints";

export const MapAndDetails = () => {
  const [isLessThanDesktop] = useMediaQuery(`(max-width: ${maxWidthTablet})`);

  return (
    <Flex>
      <Box
        as="aside"
        flex="1 0 440px"
      >
        <Aside />
      </Box>
      <Box
        as="main"
        flex="1 0 calc(100% - 440px)"
      >
        <Box
          pos="relative"
          mx="auto"
          sx={{"--footer-margin": "16px"}}
        >
          <Map />
          { !isLessThanDesktop && (
            <Footer
              asCard
              hideDivider
            />
          ) }
        </Box>
      </Box>
    </Flex>
  );
};
