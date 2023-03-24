import * as React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Flex, Spacer } from "@chakra-ui/react";
import logo from "@/assets/images/logo--new.svg";
import ChangeLanguage from "@Components/ChangeLanguage/ChangeLanguage";

const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Flex>
      <img src={logo} alt="logo" width={135} />
      <Spacer />
      <Flex p="4px" gap="32px">
        <Link to="/">{t("pages.home.name")}</Link>
        <Link to="/map">{t("pages.map.name")}</Link>
        <Link to="/about">{t("pages.about.name")}</Link>
        <ChangeLanguage />
      </Flex>
    </Flex>
  );
};

export default Navigation;
