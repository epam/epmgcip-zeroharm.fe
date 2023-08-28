import { Box, chakra } from "@chakra-ui/react";
import { FooterContent } from "./FooterContent";

const StyledFooter = chakra(Box, {
  baseStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: "sticky",
    borderRadius: 8
  }
});

export const FooterCard = () => {
  return (
    <StyledFooter
      as="footer"
      m="var(--footer-margin)"
      w={`calc(100% - ${"var(--footer-margin)"} - ${"var(--footer-margin)"})`}
    >
      <FooterContent />
    </StyledFooter>
  );
};
