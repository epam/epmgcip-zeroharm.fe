import * as React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import logo from "@/assets/images/logo--new.svg";
import LanguageSelect from "@/components/LanguageSelect/LanguageSelect";

const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Flex>
      <img src={logo} alt="logo" width={135} />
      <Spacer />
      <Flex p="4px" gap="32px">
        <Link to="/">{t("pages.home.name")}</Link>
        <Link to="/map">{t("pages.map.name")}</Link>
        <Box flexShrink={0}>
          <Link to="/about">{t("pages.about.name")}</Link>
        </Box>
        <LanguageSelect />
      </Flex>
    </Flex>
  );
};

export default Navigation;
