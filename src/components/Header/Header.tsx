import { FC, useEffect } from "react";
import { Flex, Box, HStack, useDisclosure, Spacer, IconButton } from "@chakra-ui/react";
import { LanguageMenu, ThemeToggler, Logo, Navbar, MobileNavbar } from "@Components";
import { useDetectWidth } from "@Hooks";
import { ReactComponent as HamburgerIcon } from "@Assets/icons/stroke/harm-hamburger-button.svg";

export const Header: FC = () => {
  const { isLargerThan600 } = useDetectWidth();
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
      zIndex="sticky"
      h={{
        base: "var(--headerMobileHeight)",
        md: "var(--headerHeight)"
      }}
    >
      <Flex
        h="full"
        align="center"
        maxW="var(--maxContentWidth)"
        mx="auto"
        px={{ base: "16px", lg: "24px" }}
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

