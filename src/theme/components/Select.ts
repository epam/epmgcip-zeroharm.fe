import { defineStyleConfig } from "@chakra-ui/react";

export const Select = defineStyleConfig({
  variants: {
    outline: {
      icon: {
        color: "gray.400",
      },
      field: {
        bg: "gray.700",
        borderWidth: "0px",
        paddingInlineStart: "48px",
      },
    },
  },
  defaultProps: {
    variant: "outline",
  },
});
