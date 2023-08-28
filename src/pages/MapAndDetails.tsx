import { Flex, Box } from "@chakra-ui/react";
import { Aside, Map, FooterCard } from "@Components";

export const MapAndDetails = () => {
  return (
    <Flex>
      <Box
        flex="1 0 440px"
      >
        <Aside />
      </Box>
      <Box
        flex="1 0 calc(100% - 440px)"
      >
        <Box
          pos="relative"
          mx="auto"
          sx={{"--footer-margin": "16px"}}
        >
          <Map />
          <FooterCard />
        </Box>
      </Box>
    </Flex>
  );
};
