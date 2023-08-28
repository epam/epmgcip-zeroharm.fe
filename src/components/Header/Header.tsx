import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Flex, Spacer, Box, HStack } from "@chakra-ui/react";
import { LanguageMenu } from "../LanguageMenu/LanguageMenu";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import logo from "@Assets/images/logo--new.svg";

export const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="header"
      pos="fixed"
      h={{
        base: "56px",
        md: "64px"
      }}
    >
      <Flex h="full" align="center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width={135}
          />
        </Link>

        <Spacer />

        <HStack
          gap={{ base: "28px", lg: "32px" }}
        >
          <HStack
            as="nav"
            gap={{ base: "28px", lg: "32px" }}
            fontWeight="bold"
          >
            <Link to="/">
              { t("pages.home.name") }
            </Link>

            <Link to="/map">
              { t("pages.map.name") }
            </Link>

            <Link to="/about">
              { t("pages.about.name") }
            </Link>
          </HStack>

          <LanguageMenu />

          <ThemeToggler />
        </HStack>
      </Flex>
    </Box>
  );
};

