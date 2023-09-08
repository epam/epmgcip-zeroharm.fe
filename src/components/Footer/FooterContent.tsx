import { Text, Link as ChakraLink } from "@chakra-ui/react";
import { t } from "i18next";

export const FooterContent = () => {
  return (
    <Text
      fontSize="sm"
      lineHeight="18px"
      maxWidth={{
        base: "none",
        md: "567px"
      }}
      textAlign={{
        base: "center",
        md: "initial"
      }}
    >
      { t("pages.footer.start") }
      <ChakraLink
        href="https://hydromet.uz/"
        isExternal
        color={{ base: "yellow.500", lg: "white" }}
        _hover={{ color: "yellow.500" }}
      >
        { t("pages.footer.link") }
      </ChakraLink>
      { t("pages.footer.end") }
    </Text>
  );
};
