import * as React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Flex, Spacer, Text } from "@chakra-ui/react";
import logo from "../../assets/images/logo--new.svg";

const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang).then();
  };

  return (
    <Flex>
      <img src={logo} alt="logo" width={135} />
      <Spacer />
      <Flex p="4px" gap="32px">
        <Link to="/">{t("pages.home")}</Link>
        <Link to="/map">{t("pages.map")}</Link>
        <Link to="/about">{t("pages.about")}</Link>
        <Flex gap="8px">
          <Text onClick={() => handleClick("ru")}>{t("lang.ru")}</Text>
          <Text onClick={() => handleClick("en")}>{t("lang.en")}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navigation;
