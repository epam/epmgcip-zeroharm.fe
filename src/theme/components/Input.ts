import { defineStyleConfig } from "@chakra-ui/react";

export const Input = defineStyleConfig({
  variants: {
    gray: {
      field: {
        backgroundColor: "gray.700",
        ":focus": {
          border: "1px"
        },
      },
    },
    defaultProps: {
      variant: "gray",
    },
  },
});
