import { Text, Link as ChakraLink } from "@chakra-ui/react";
import { Trans } from "react-i18next";
import { useIncludeHover } from "@Hooks";

export const FooterContent = () => {
  const shouldIncludeHover = useIncludeHover();

  const Link = <ChakraLink
    href="https://hydromet.uz/"
    isExternal
    sx={
      shouldIncludeHover
        ? { _hover: { color: "linkHoverAndActiveColor" } }
        : { color: "linkHoverAndActiveColor" }
    }
  />;

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
      <Trans
        i18nKey="pages.footer.sourceInfoText"
        components={{ 1: Link }}
      />
    </Text>
  );
};
