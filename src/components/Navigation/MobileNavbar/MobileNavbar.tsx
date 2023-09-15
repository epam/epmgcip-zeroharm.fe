import { FC, useEffect } from "react";
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { useDataStore } from "@Store/useDataStore";
import { FeedbackButton, Footer, Logo, Navbar } from "@Components";
import { ReactComponent as CloseIcon } from "@Assets/icons/stroke/harm-close.svg";

type MobileNavbarProps = {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavbar: FC<MobileNavbarProps> = ({ isOpen, onClose }) => {
  const { setIsNavMenuOpen } = useDataStore();

  useEffect(() => {
    setIsNavMenuOpen(isOpen);
  }, [isOpen]);

  return (
    <Drawer
      variant="drawer"
      placement="top"
      size="full"
      autoFocus={false}
      onClose={onClose}
      isOpen={isOpen}
    >
      <DrawerContent>
        <DrawerHeader p="0 16px">
          <Flex
            h="var(--headerMobileHeight)"
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
        <DrawerFooter
          p="0"
          display="flex"
          flexDirection="column"
          gap="32px"
        >
          <FeedbackButton onClick={onClose} />
          <Footer />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
