import { Text, Link as ChakraLink } from "@chakra-ui/react";
import { t } from "i18next";
import { useIncludeHover } from "@Hooks";

export const FooterContent = () => {
  const shouldIncludeHover = useIncludeHover();

  const textEnding = t("pages.footer.end");

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
      { t("pages.footer.start") }{ " " }
      <ChakraLink
        href="https://hydromet.uz/"
        isExternal
        sx={
          shouldIncludeHover ?
          { _hover: { color: "yellow.500" } } :
          { color: "yellow.500" }
        }
      >
        { t("pages.footer.link") }
      </ChakraLink>
      { textEnding && (
        <>
          { " " }{ textEnding }
        </>
      ) }
    </Text>
  );
};
