import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import { LanguageMenu } from "../LanguageMenu/LanguageMenu";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import logo from "@Assets/images/logo--new.svg";

export const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="header"
      pos="fixed"
    >
      <Flex>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width={135}
          />
        </Link>
        <Spacer />
        <Flex p="4px" gap="32px">
          <Link to="/">
            { t("pages.home.name") }
          </Link>
          <Link to="/map">
            { t("pages.map.name") }
          </Link>
          <Box flexShrink={0}>
            <Link to="/about">
              { t("pages.about.name") }
            </Link>
          </Box>
          <LanguageMenu />
          <ThemeToggler />
        </Flex>
      </Flex>
    </Box>
  );
};

