import { Flex, Box } from "@chakra-ui/react";
import { Aside, Map } from "@Components";

export const MapAndDetails = () => {
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
        <Map />
      </Box>
    </Flex>
  );
};
