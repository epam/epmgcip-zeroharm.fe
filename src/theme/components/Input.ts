import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
);

export const Input = defineMultiStyleConfig({
  variants: {
    default: {
      field: {
        _placeholder: {
          color: "feedbackFormColor.placeholder",
          fontSize: "16px"
        },
        backgroundColor: "feedbackFormColor.inputBg",
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
