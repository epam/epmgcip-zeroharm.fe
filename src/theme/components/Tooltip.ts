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
      borderColor: "tooltip.primaryBorder",
      bgColor: "tooltip.primaryBg",
      [$arrowBg.variable]: "colors.tooltip.primaryBg"
    },
    light: {
      fontSize: "small",
      lineHeight: "small",
      background: "feedbackFormColor.tooltipBg",
      color: "feedbackFormColor.tooltipText",
      borderColor: "feedbackFormColor.tooltipBorder",
      [$arrowBg.variable]: "colors.feedbackFormColor.tooltipBg"
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
