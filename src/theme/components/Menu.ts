import { StyleFunctionProps, defineStyleConfig } from "@chakra-ui/react";

export const Menu = defineStyleConfig({
  variants: {
    default: ({ colorMode }: StyleFunctionProps) => {
      const isDark = colorMode === "dark";
      const color = isDark ? "white" : "gray.900";
      const itemBg = {
        bg: isDark ? "gray.600" : "gray.100"
      };
      const baseBg = isDark ? "gray.900" : "white";

      return {
        button: {
          color,
          fontWeight: "bold",
          bg: baseBg,
          _hover: {
            color: isDark ? "gray.100" : "gray.700"
          },
          _active: {
            color: isDark ? "white" : "gray.600"
          }
        },
        list: {
          color,
          boxShadow: "none",
          overflow: "hidden",
          border: "none",
          overflowX: "hidden",
          overflowY: "auto",
          maxH: {
            md: "300px"
          },
          bg: {
            base: baseBg,
            md: isDark ? "gray.700" : "white"
          }
        },
        item: {
          h: "48px",
          gap: "12px",
          bg: "transparent",
          color,
          _focus: itemBg,
          _hover: itemBg,
          _selected: itemBg
        }
      };
    }
  },
  defaultProps: {
    variant: "default"
  }
});
