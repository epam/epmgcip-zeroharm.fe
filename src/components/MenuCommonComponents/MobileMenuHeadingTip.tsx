import { Flex, chakra } from "@chakra-ui/react";

export const MobileMenuHeadingTip = chakra(Flex, {
  baseStyle: {
    w: "calc(100vw - var(--headerMobileHeight))",
    h: "var(--headerMobileHeight)",
    zIndex: "1300",
    bgColor: "secondaryBgColor",
    color: "inherit",
    pl: "8px",
    pos: "fixed",
    top: "0",
    left: "var(--headerMobileHeight)",
    alignItems: "center"
  }
});
