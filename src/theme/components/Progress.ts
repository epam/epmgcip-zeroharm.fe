import { defineStyleConfig } from "@chakra-ui/react";

export const Progress = defineStyleConfig({
  variants: {
    default: {
      track: {
        bgColor: "indicator.progress-bg",
        h: "4px",
        borderRadius: "2px"
      }
    }
  },
  defaultProps: {
    variant: "default"
  }
});
