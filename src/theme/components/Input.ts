import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

export const Input = defineMultiStyleConfig({
  variants: {
    default: {
      field: {
        height: { base: "44px", lg: "48px" },
        _placeholder: {
          color: "feedbackFormColor.placeholder",
          fontSize: { base: "small", lg: "medium" }
        },
        backgroundColor: "feedbackFormColor.inputBg",
        color: "feedbackFormColor.text",
        _focus: {
          border: "1px",
          borderColor: "feedbackFormColor.borderFocus"
        }
      }
    }
  },
  defaultProps: {
    size: "lg",
    variant: "default"
  }
});
