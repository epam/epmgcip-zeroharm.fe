import { cssVar, defineStyleConfig } from "@chakra-ui/react";

const $bg = cssVar("tooltip-bg");
const $arrowBg = cssVar("popper-arrow-bg");

export const Tooltip = defineStyleConfig({
  baseStyle: {
    lineHeight: "16px",
    p: "16px",
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "gray.600",
    fontSize: "14px",
  },
  variants: {
    default: {
      background: "gray.700",
      color: "white",
      [$arrowBg.variable]: $bg.reference,
    },
    light: {
      background: "white",
      color: "black",
      borderColor: "gray.100",
      [$arrowBg.variable]: "white",
    },
    big: {
      background: "gray.700",
      color: "white",
      lineHeight: "18px",
      fontSize: "14px",
      [$arrowBg.variable]: $bg.reference,
    },
    defaultProps: {
      variant: "default",
    },
  },
});
