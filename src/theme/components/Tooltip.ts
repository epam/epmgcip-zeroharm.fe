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
    fontSize: "small"
  },
  variants: {
    default: {
      bg: "gray.700",
      color: "white"
    },
    light: {
      background: "white",
      color: "gray.950",
      borderColor: "gray.100",
      [$arrowBg.variable]: "white"
    },
    big: {
      background: "gray.700",
      color: "white",
      lineHeight: "18px",
      fontSize: "small",
      [$arrowBg.variable]: $bg.reference
    }
  },
  defaultProps: {
    variant: "default"
  }
});
