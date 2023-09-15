import { FC } from "react";
import { Flex, Box, Divider, chakra } from "@chakra-ui/react";
import { useDataStore } from "@Store/useDataStore";
import { FeedbackButton } from "../FeedbackButton/FeedbackButton";
import { useDetectWidth } from "@Hooks";
import { FooterContent } from "./FooterContent";
import { FeedbackButtonMobile } from "../FeedbackButton/FeedbackButtonMobile";

const FooterStatic = chakra(Box, {
  baseStyle: {
    marginTop: "auto"
  }
});

const FooterFixed = chakra(Box, {
  baseStyle: {
    position: "fixed",
    bottom: "0"
  }
});

const FooterAsCard = chakra(Box, {
  baseStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
    borderRadius: 8,
    margin: "var(--footerMargin)",
    width: `calc(100% - ${"var(--footerMargin)"} - ${"var(--footerMargin)"})`
  }
});

const FooterTypes = {
  static: FooterStatic,
  fixed: FooterFixed,
  card: FooterAsCard
};

type FooterProps = {
  variant?: keyof typeof FooterTypes,
};

export const Footer: FC<FooterProps> = ({ variant = "static" }) => {
  const { isLanguageMenuOpen, isNavMenuOpen } = useDataStore();

  const { isLargerThan600 } = useDetectWidth();

  const FooterContainer = FooterTypes[variant];
  const isVariantCard = variant === "card";
  const showDivider = !isVariantCard;
  const isMenuOpen = isLanguageMenuOpen || isNavMenuOpen;

  return (
    <FooterContainer
      as="footer"
      bg="gray.900"
      minH="var(--footerHeight)"
      display="flex"
      flexDirection="column"
    >
      { showDivider && <Divider /> }
      <Flex
        flex="1"
        w="100%"
        px={{ base: "16px", lg: "24px" }}
        align="center"
        alignSelf="center"
        justify="space-between"
        maxWidth={isVariantCard ? "none" : "var(--maxContentWidth)"}
      >
        <FooterContent />
        { isLargerThan600 ? (
          <Box
            pl={{
              base: "initial",
              md: "50px",
              lg: "16px"
            }}
          >
            <FeedbackButton />
          </Box>
        ) : (!isMenuOpen && <FeedbackButtonMobile />) }
      </Flex>
    </FooterContainer>
  );
};
