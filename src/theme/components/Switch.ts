import { defineStyleConfig } from "@chakra-ui/react";

export const Switch = defineStyleConfig({
  variants: {
    default: {
      track: {
        bg: "rgba(255, 255, 255, 0.3)",
        h: "20px",
        w: "42px",
        _checked: {
          bg: "rgba(255, 255, 255, 0.3)"
        }
      },
      thumb: {
        bg: "white",
        w: "20px",
        h: "20px"
      }
    }
  },
  defaultProps: {
    variant: "default"
  }
});
