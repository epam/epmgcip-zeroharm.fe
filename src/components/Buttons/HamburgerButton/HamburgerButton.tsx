import { FC } from "react";
import { IconButton } from "@chakra-ui/react";
import { ReactComponent as HamburgerIcon } from "@Assets/icons/stroke/harm-hamburger-button.svg";
import { ReactComponent as CloseIcon } from "@Assets/icons/stroke/harm-close.svg";

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerButton: FC<HamburgerButtonProps> = ({ isOpen, onClick }) => {
  return (
    <IconButton
      variant="iconButton"
      aria-label="hamburger button"
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      display={{ md: "none" }}
      onClick={onClick}
    />
  );
};
