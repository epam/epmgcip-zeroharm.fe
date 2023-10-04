import { FC } from "react";
import { Center } from "@chakra-ui/react";
import { ReactComponent as LeftArrowIcon } from "@Assets/icons/stroke/harm-arrow-left.svg";

export const BackwardSign: FC = () => (
  <Center
    pointerEvents="all"
    zIndex="13000"
    pos="fixed"
    top="0"
    left="0"
    bgColor="secondaryBgColor"
    h="var(--headerMobileHeight)"
    w="var(--headerMobileHeight)"
  >
    <LeftArrowIcon width="20px" />
  </Center>
);
