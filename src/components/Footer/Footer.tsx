import { FC } from "react";
import { Box, Divider, chakra } from "@chakra-ui/react";
import { FeedbackButton } from "../FeedbackButton/FeedbackButton";
import { useDetectWidth } from "@Hooks";
import { FooterContent } from "./FooterContent";
import { FooterWrapper } from "./FooterWrapper";

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
  const { isLargerThan600 } = useDetectWidth();

  const FooterContainer = FooterTypes[variant];
  const isCardVariant = variant === "card";
  const showDivider = !isCardVariant;

  return (
    <FooterContainer
      as="footer"
      bg="gray.900"
      maxH={{ base: "var(--footerMobileMaxHeight)", md: "var(--footerHeight)" }}
      minH={{ base: "var(--footerMobileMinHeight)", md: "var(--footerHeight)" }}
      display="flex"
      flexDirection="column"
    >
      { showDivider && <Divider /> }
      <FooterWrapper isCardVariant={isCardVariant}>
        <FooterContent />
        {
          isLargerThan600 && (
            <Box
              pl={{
                base: "initial",
                md: "50px",
                lg: "16px"
              }}
            >
              <FeedbackButton />
            </Box>
          )
        }
      </FooterWrapper>
    </FooterContainer>
  );
};
