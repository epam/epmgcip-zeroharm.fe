import { Box, Flex } from "@chakra-ui/react";
import { Swiper } from "../Swiper/Swiper";
import { ReactComponent as Circles } from "@Assets/images/circles.svg";

export const Greetings = () => {
  return (
    <Flex
      pt="155px"
      direction="column"
      gap="32px"
      alignItems="flex-end"
      position="relative"
      flex="1"
      maxW="500px"
    >
      <Box
        zIndex="1"
        position="absolute"
        top="68px"
        left="0px"
      >
        <Circles />
      </Box>
      <Swiper />
    </Flex>
  );
};
