import { FC } from "react";
import { Flex, Box, HStack, useMediaQuery, useDisclosure, Spacer } from "@chakra-ui/react";
import { LanguageMenu } from "../LanguageMenu/LanguageMenu";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { HamburgerButton } from "../Buttons/HamburgerButton/HamburgerButton";
import { Logo } from "../Logo/Logo";
import { Navbar } from "../Navigation/Navbar/Navbar";
import { MobileNavbar } from "../Navigation/MobileNavbar/MobileNavbar";

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

        <HStack
          gap={{ base: "36px", md: "28px", lg: "32px" }}
        >
          {
            !isMobileWidth
              ? <Navbar />
              : <MobileNavbar {...{ isOpen, onClose, onOpen }}/>
          }

          <LanguageMenu />

          <ThemeToggler />

          <HamburgerButton isOpen={isOpen} onClick={onOpen} />
        </HStack>
      </Flex>
    </Box>
  );
};

