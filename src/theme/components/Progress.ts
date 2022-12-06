import { defineStyleConfig } from "@chakra-ui/react";

export const Progress = defineStyleConfig({
  variants: {
    default: {
      track: {
        bg: "gray.700",
        h: "4px",
        borderRadius: "2px",
      },
    },
  },
  defaultProps: {
    variant: "default",
  },
});
