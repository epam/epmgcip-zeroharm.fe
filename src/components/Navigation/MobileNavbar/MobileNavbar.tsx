import { FC } from "react";
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Flex, Spacer } from "@chakra-ui/react";
import { Logo } from "../../Logo/Logo";
import { HamburgerButton } from "../../Buttons/HamburgerButton/HamburgerButton";
import { Navbar } from "../Navbar/Navbar";

type MobileNavbarProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const MobileNavbar: FC<MobileNavbarProps> = ({ isOpen, onOpen, onClose }) => {
  return (
    <Drawer
      placement="top"
      size="full"
      autoFocus={false}
      onClose={onClose}
      isOpen={isOpen}
    >
      <DrawerContent
        bg="gray.900"
        boxShadow="none"
      >
        <DrawerHeader py="0">
          <Flex
            h="56px"
            align="center"
          >
            <Logo />

            <Spacer />

            <HamburgerButton isOpen={isOpen} onClick={onClose} />
          </Flex>
        </DrawerHeader>

        <DrawerBody pt="20px">
          <Navbar />
        </DrawerBody>

        <DrawerFooter>
          {
            /* TODO */
          }
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
