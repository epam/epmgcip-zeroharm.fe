import { FC, useEffect } from "react";
import { Flex, Box, HStack, useMediaQuery, useDisclosure, Spacer, IconButton } from "@chakra-ui/react";
import { LanguageMenu, ThemeToggler, Logo, Navbar, MobileNavbar } from "@Components";
import { ReactComponent as HamburgerIcon } from "@Assets/icons/stroke/harm-hamburger-button.svg";

export const Header: FC = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const isMobileWidth = !isLargerThan600;

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!isMobileWidth && isOpen) {
      onClose();
    }
  }, [isMobileWidth]);

  return (
    <Box
      as="header"
      pos="fixed"
      zIndex="1200"
      h={{ base: "56px", md: "64px" }}
    >
      <Flex
        h="full"
        align="center"
        maxW="1440px"
        mx="auto"
        px="24px"
      >
        <Logo />

        <Spacer />

        <HStack gap={{ base: "36px", md: "28px", lg: "32px" }}>
          {
            isMobileWidth
              ? <MobileNavbar {...{ isOpen, onClose }}/>
              : <Navbar />
          }

          <LanguageMenu />

          <ThemeToggler />

          <IconButton
            variant="iconButton"
            aria-label="hamburger button"
            icon={<HamburgerIcon />}
            display={{ md: "none" }}
            onClick={onOpen}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

