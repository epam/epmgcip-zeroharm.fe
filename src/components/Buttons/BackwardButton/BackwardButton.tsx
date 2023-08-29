import { FC } from "react";
import { IconButton } from "@chakra-ui/react";
import { ReactComponent as LeftArrowIcon } from "@Assets/icons/stroke/harm-arrow-left.svg";

export const BackwardButton: FC = () => {
  return (
    <IconButton
      variant="iconButton"
      aria-label="backward button"
      w="56px"
      h="56px"
      icon={<LeftArrowIcon width="20px" />}
    />
  );
};
