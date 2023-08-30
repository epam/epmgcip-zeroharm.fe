import { FC } from "react";
import { As, Flex, useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as LeftArrowIcon } from "@Assets/icons/stroke/harm-arrow-left.svg";

type BackwardButtonProps = {
  as: As
}

export const BackwardButton: FC<BackwardButtonProps> = ({ as }) => {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Flex
      as={as}
      w="56px"
      h="56px"
      align="center"
      justify="center"
      bg={bg}
    >
      <LeftArrowIcon width="20px" />
    </Flex>
  );
};
