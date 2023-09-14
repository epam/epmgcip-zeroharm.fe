import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

export const Input = defineMultiStyleConfig({
  variants: {
    gray: {
      field: {
        height: { base: "44px", lg: "48px" },
        _placeholder: {
          color: "gray.300",
          fontSize: { base: "small", lg: "medium" }
        },
        backgroundColor: "gray.700",
        _focus: {
          border: "1px"
        }
      }
    }
  },
  defaultProps: {
    size: "lg",
    variant: "gray"
  }
});
