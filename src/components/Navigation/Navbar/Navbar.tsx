import { FC } from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const Navbar: FC = () => {
  const { t } = useTranslation();

  return (
    <Flex
      as="nav"
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      gap={{ base: "40px", md: "28px", lg: "32px" }}
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
    </Flex>
  );
};
