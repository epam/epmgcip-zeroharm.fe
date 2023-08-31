import { FC } from "react";
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { Logo, Navbar } from "@Components";
import { ReactComponent as CloseIcon } from "@Assets/icons/stroke/harm-close.svg";

type MobileNavbarProps = {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavbar: FC<MobileNavbarProps> = ({ isOpen, onClose }) => {
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
        zIndex="1300"
      >
        <DrawerHeader py="0">
          <Flex
            h="56px"
            align="center"
          >
            <Logo />

            <Spacer />

          <IconButton
            variant="iconButton"
            aria-label="hamburger close button"
            icon={<CloseIcon />}
            onClick={onClose}
          />
          </Flex>
        </DrawerHeader>

        <DrawerBody pt="20px">
          <Navbar onClick={onClose} />
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
