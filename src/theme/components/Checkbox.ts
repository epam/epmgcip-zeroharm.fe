import { defineStyleConfig } from "@chakra-ui/react";

export const Checkbox = defineStyleConfig({
  variants: {
    default: {
      control: {
        borderColor: "primaryColor",
        _checked: {
          bg: "primaryColor",
          border: "none",
          _hover: {
            bg: "primaryColor"
          }
        }
      },
      icon: {
        color: "primaryBgColor"
      }
    }
  },
  defaultProps: {
    variant: "default"
  }
});
