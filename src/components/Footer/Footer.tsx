import * as React from "react";
import { Flex, Text, Link, Button } from "@chakra-ui/react";
import { t } from "i18next";

const Footer: React.FC = () => {
  return (
    <Flex p="4px" gap="32px" w="100%" justify="space-between">
      <Text fontSize="xs">
        {t("pages.footer.text")} {" "}
        <Link href="https://hydromet.uz/" isExternal>
          {t("pages.footer.link")} {" "}
        </Link>
      </Text>
      <Button size="xs">{t("pages.footer.button")}</Button>
    </Flex>
  );
};

export default Footer;
