import { defineStyleConfig } from "@chakra-ui/react";

export const Switch = defineStyleConfig({
  variants: {
    default: {
      track: {
        bg: "themeTogglerColor.body",
        h: "20px",
        w: "42px",
        cursor: "initial",
        "@media (hover: hover)": {
          ":hover": {
            cursor: "pointer"
          }
        }
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
