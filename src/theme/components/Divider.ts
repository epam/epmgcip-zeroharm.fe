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
      background: "gray.700"
    },
    white: {
      background: "white",
      height: "2px"
    },
    gradient: {
      background:
        "linear-gradient(90deg, #339944 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #7D5BA6 100%)",
      height: "4px"
    },
    positioned: {
      background: "gray.700",
      position: "absolute",
      top: 0,
      left: 0,
      width: "calc(100% + 48px)"
    },
    defaultProps: {
      variant: "default"
    }
  }
});
