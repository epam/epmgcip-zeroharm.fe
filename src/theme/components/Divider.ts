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
    }
  },
  defaultProps: {
    variant: "default"
  }
});
