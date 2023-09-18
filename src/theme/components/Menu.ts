import { StyleFunctionProps, defineStyleConfig } from "@chakra-ui/react";

export const Menu = defineStyleConfig({
  variants: {
    default: ({ colorMode }: StyleFunctionProps) => {
      const isDark = colorMode === "dark";

      const itemPseudoClassStyles = {
        bg: isDark ? "gray.600" : "navyBlue.100"
      };

      return {
        button: {
          fontWeight: "bold",
          _hover: {
            color: isDark ? "gray.100" : "navyBlue.600"
          }
        },
        list: {
          boxShadow: "none",
          overflow: "hidden",
          border: "none",
          overflowX: "hidden",
          overflowY: "auto",
          bg: isDark
            ? { base: "gray.900", md: "gray.700" }
            : "white"
        },
        item: {
          bg: "transparent",
          _focus: itemPseudoClassStyles,
          _hover: itemPseudoClassStyles,
          _selected: itemPseudoClassStyles
        }
      };
    }
  },
  defaultProps: {
    variant: "default"
  }
});
