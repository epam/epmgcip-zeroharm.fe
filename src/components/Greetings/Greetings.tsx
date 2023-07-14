import { Box, Flex } from "@chakra-ui/react";

import { Swiper } from "../Swiper";

import { ReactComponent as Circles } from "@/assets/images/circles.svg";

const Greetings = () => {

  return (
    <Flex
      p="120px 80px 0 80px"
      direction="column"
      gap="32px"
      alignItems="flex-end"
      position="relative"
    >
      <Box zIndex="1" position="absolute" top="-25px" right="125px">
        <Circles />
      </Box>
      <Swiper />
    </Flex>
  );
};

export default Greetings;
