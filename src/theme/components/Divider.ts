import {defineStyleConfig } from "@chakra-ui/react";

export const Divider = defineStyleConfig({
  baseStyle: {
      height: "1px"
  },
  variants: {
    default: {
      background: "gray.700",
    },
    white: {
      background: "white",
      height: "2px",
    },
    gradient: {
      background: "linear-gradient(90deg, #339944 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #7D5BA6 100%)", // TODO: Change to gradient variable
      height: "4px",   
    },
    defaultProps: {
      variant: "default",
    },
  },
});
