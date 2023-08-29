import { FC } from "react";
import { Flex, Box, Divider, Text, Link as ChakraLink, useMediaQuery } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { t } from "i18next";
import { maxWidthMobile } from "@Theme/foundations/breakpoints";
import { FeedbackButton } from "@Components";

type FooterProps = {
  asCard?: boolean,
  hideDivider?: boolean
}

export const Footer: FC<FooterProps> = ({ asCard, hideDivider }) => {
  const [isMobile] = useMediaQuery(`(max-width: ${maxWidthMobile})`);
  const { pathname } = useLocation();
  const isMapPage = pathname === "/map";
  const footerContainerPosStyle = isMapPage ? "relative" : "fixed";

  return (
    <Box
      as="footer"
      pos={{
        base: "relative",
        md: asCard ? "absolute" : footerContainerPosStyle
      }}
      bottom={{
        base: "initial",
        md: 0
      }}
      left={asCard ? 0 : "initial"}
      borderRadius={asCard ? 8 : "initial"}
      margin={asCard ? "var(--footer-margin)" : "initial"}
      w={asCard ? `calc(100% - ${"var(--footer-margin)"} - ${"var(--footer-margin)"})` : "100%"}
    >
      { !hideDivider && (
        <Divider variant="positioned" />
      ) }
      <Flex
        w="100%"
        align="center"
        justify={"space-between"}
      >
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
        { !isMobile && (
          <FeedbackButton />
        ) }
      </Flex>
    </Box>
  );
};
