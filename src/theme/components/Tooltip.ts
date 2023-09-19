import { cssVar, defineStyleConfig } from "@chakra-ui/react";

const $bg = cssVar("tooltip-bg");
const $arrowBg = cssVar("popper-arrow-bg");

export const Tooltip = defineStyleConfig({
  baseStyle: {
    p: "16px",
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid"
  },
  variants: {
    default: {
      fontSize: "tiny",
      lineHeight: "tiny",
      color: "white",
      borderColor: "tooltip.border"
    },
    light: {
      fontSize: "small",
      lineHeight: "small",
      background: "white",
      color: "gray.950",
      borderColor: "gray.100",
      [$arrowBg.variable]: "white"
    },
    big: {
      fontSize: "small",
      lineHeight: "small",
      background: "gray.700",
      color: "white",
      [$arrowBg.variable]: $bg.reference
    }
  },
  defaultProps: {
    variant: "default"
  }
});
