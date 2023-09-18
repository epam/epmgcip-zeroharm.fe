import { defineStyleConfig } from "@chakra-ui/react";

export const Switch = defineStyleConfig({
  variants: {
    default: {
      track: {
        bg: "themeTogglerColor",
        h: "20px",
        w: "42px"
      },
      thumb: {
        bg: "primaryColor",
        w: "20px",
        h: "20px"
      }
    }
  },
  defaultProps: {
    variant: "default"
  }
});
