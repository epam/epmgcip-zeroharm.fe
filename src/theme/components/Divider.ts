import { defineStyleConfig } from "@chakra-ui/react";

export const Divider = defineStyleConfig({
  baseStyle: {
    width: "70px",
    height: "1px",
    left: "16px",
    Top: "31px"
  },
  variants: {
    default: {
      background: "borderColor"
    },
    white: {
      background: "white",
      height: "2px"
    },
    gradient: {
      background: "borderGradientColor",
      height: "4px"
    }
  },
  defaultProps: {
    variant: "default"
  }
});
