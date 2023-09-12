import { Text, Link as ChakraLink, useMediaQuery } from "@chakra-ui/react";
import { t } from "i18next";

export const FooterContent = () => {
  const shouldIncludeHover = useMediaQuery("(hover: hover) and (pointer: fine)", { ssr: false });

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
        sx={
          shouldIncludeHover[0] ?
          { _hover: { color: "yellow.500" } } :
          { color: "yellow.500" }
        }
      >
        { t("pages.footer.link") }
      </ChakraLink>
      { t("pages.footer.end") }
    </Text>
  );
};
