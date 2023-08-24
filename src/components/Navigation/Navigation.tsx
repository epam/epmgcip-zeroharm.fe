import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import LanguageMenu from "@/components/LanguageMenu/LanguageMenu";
import logo from "@/assets/images/logo--new.svg";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";

const Navigation: FC = () => {
  const { t } = useTranslation();

  return (
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
        <ThemeSwitcher />
      </Flex>
    </Flex>
  );
};

export default Navigation;
