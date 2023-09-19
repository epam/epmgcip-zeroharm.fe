import { Box, Flex } from "@chakra-ui/react";
import { Swiper } from "../Swiper/Swiper";
import { useDetectWidth } from "@Hooks";
import { ReactComponent as Circles } from "@Assets/images/circles.svg";

export const Greetings = () => {
  const { isLargerThan1024 } = useDetectWidth();

  return (
    <Flex
      justifyContent="end"
      position="relative"
      flex={{ base: "0", lg: "1" }}
      maxW={{ base: "100%", lg: "500px" }}
      isolation="isolate"
    >
      <Box
        zIndex="1"
        position="absolute"
        left="0px"
      >
        { isLargerThan1024 && <Circles /> }
      </Box>
      <Swiper />
    </Flex>
  );
};
