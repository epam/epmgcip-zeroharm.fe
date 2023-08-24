import { defineStyleConfig } from "@chakra-ui/react";

export const Switch = defineStyleConfig({
  variants: {
    default: {
      track: {
        bg: "whiteAlpha.400",
        h: "20px",
        w: "42px",
        _checked: {
          bg: "whiteAlpha.400"
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
