import { FC } from "react";
import { Flex, Box, Divider, chakra } from "@chakra-ui/react";
import { FeedbackButton } from "@Components";
import { useDetectWidth } from "@Hooks";
import { FooterContent } from "./FooterContent";

const FooterStatic = chakra(Box, {
  baseStyle: {
    position: "relative",
    marginTop: "auto"
  }
});

const FooterFixed = chakra(Box, {
  baseStyle: {
    position: "fixed",
    width: "100vw",
    bottom: "0"
  }
});

const FooterAsCard = chakra(Box, {
  baseStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 8,
    zIndex: "sticky",
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
  variant : keyof typeof FooterTypes,
};

export const Footer: FC<FooterProps> = ({ variant = "static" }) => {
  const { isLargerThan600 } = useDetectWidth();

  const FooterContainer = FooterTypes[variant];
  const isVariantCard = variant === "card";
  const showDivider = !isVariantCard;

  return (
    <FooterContainer
      as="footer"
      bg="gray.900"
    >
      { showDivider && (
        <Divider variant="positioned" />
      ) }
      <Flex
        w="100%"
        m="auto"
        align="center"
        justify="space-between"
        maxWidth={isVariantCard ? "none" : "1408px"}
      >
        <FooterContent />
        { isLargerThan600 && (
          <Box pl="50px">
            <FeedbackButton />
          </Box>
        ) }
      </Flex>
    </FooterContainer>
  );
};
