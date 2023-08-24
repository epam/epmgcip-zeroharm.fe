import { StyleFunctionProps, defineStyleConfig } from "@chakra-ui/react";

export const Menu = defineStyleConfig({
  variants: {
    language: (props: StyleFunctionProps) => ({
      button: {
        color: props.colormode === "dark" ? "white" : "gray.900",
        fontWeight: "bold",
        bg: "transparent",
        pl: 4,
        w: {
          base: "76px",
          md: "104px"
        },
        _hover: {
          bg: "transparent",
          color: props.colormode === "dark" ? "gray.100" : "gray.700"
        },
        _active: {
          bg: {
            base: "gray.900",
            md: "transparent"
          },
          color: props.colormode === "dark" ? "white" : "gray.600"
        }
      },
      list: {
        boxShadow: "none",
        p: 0,
        overflow: "hidden",
        border: {
          base: "none",
          md: 2
        },
        bgColor: {
          base: "transparent",
          md: props.colorMode === "dark" ? "gray.700" : "white"
        },
        minW: {
          base: "100vw",
          md: "44",
          lg: "60"
        },
        w: {
          base: "100vw",
          md: "44",
          lg: "60"
        },
        borderRadius: {
          base: 0,
          md: 8
        }
      },
      item: {
        h: 12,
        gap: 3,
        bgColor: "transparent",
        color: props.colorMode === "dark" ? "white" : "gray.900",
        _focus: {
          bgColor: props.colorMode === "dark" ? "gray.600" : "gray.100"
        },
        _selected: {
          bgColor: props.colorMode === "dark" ? "gray.600" : "gray.100"
        }
      }
    })
  },
  defaultProps: {
    variant: "language"
  }
});
