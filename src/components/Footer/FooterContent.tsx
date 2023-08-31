import { Text, Link as ChakraLink } from "@chakra-ui/react";
import { t } from "i18next";

export const FooterContent = () => {
  return (
    <Text
      fontSize="sm"
      lineHeight="18px"
      textAlign={{
        base: "center",
        md: "initial"
      }}
    >
      { t("pages.footer.start") } <br/>
      <ChakraLink
        href="https://hydromet.uz/"
        isExternal
        _hover={{ color: "#FFA01C" }}
      >
        { t("pages.footer.link") }
      </ChakraLink>
      { t("pages.footer.end") }
    </Text>
  );
};
