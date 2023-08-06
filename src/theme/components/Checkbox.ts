import { defineStyleConfig } from "@chakra-ui/react";

export const Checkbox = defineStyleConfig({
  variants: {
    default: {
      control: {
        _checked: {
          bg: "white",
          border: "none",
          _hover: {
            bg: "white",
          },
        },
      },
      icon: {
        color: "black",
      },
    },
  },
  defaultProps: {
    variant: "default",
  },
});
