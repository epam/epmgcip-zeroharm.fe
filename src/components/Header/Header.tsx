import { FC } from "react";
import { Flex, Box, HStack, useMediaQuery, useDisclosure, Spacer, IconButton } from "@chakra-ui/react";
import { LanguageMenu, ThemeToggler, Logo, Navbar, MobileNavbar } from "@Components";
import { ReactComponent as HamburgerIcon } from "@Assets/icons/stroke/harm-hamburger-button.svg";

export const Header: FC = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const isMobileWidth = !isLargerThan600;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      pos="fixed"
      h={{ base: "56px", md: "64px" }}
    >
      <Flex
        h="full"
        align="center"
      >
        <Logo />

        <Spacer />

        <HStack gap={{ base: "36px", md: "28px", lg: "32px" }}>
          {
            !isMobileWidth
              ? <Navbar />
              : <MobileNavbar {...{ isOpen, onClose }}/>
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

