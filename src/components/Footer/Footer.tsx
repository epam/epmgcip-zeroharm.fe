import * as React from "react";
import { Flex, Text, Link as ChakraLink, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { t } from "i18next";

const Footer: React.FC = () => {
  return (
    <Flex p="4px" gap="32px" w="100%" justify="space-between">
      <Text fontSize="xs">
        {t("pages.footer.text")}{" "}
        <ChakraLink href="https://hydromet.uz/" isExternal>
          {t("pages.footer.link")}{" "}
        </ChakraLink>
      </Text>
      <Link to="/form">
        <Button size="xs">{t("pages.footer.button")}</Button>
      </Link>
    </Flex>
  );
};

export default Footer;
