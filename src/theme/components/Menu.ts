import { StyleFunctionProps, defineStyleConfig } from "@chakra-ui/react";

export const Menu = defineStyleConfig({
  variants: {
    default: (props: StyleFunctionProps) => ({
      button: {
        color: props.colormode === "dark" ? "white" : "gray.900",
        fontWeight: "bold",
        bg: props.colorMode === "dark" ? "gray.900" : "white",
        _hover: {
          bg: props.colorMode === "dark" ? "gray.900" : "white",
          color: props.colormode === "dark" ? "gray.100" : "gray.700"
        },
        _active: {
          bg: props.colorMode === "dark" ? "gray.900" : "white",
          color: props.colormode === "dark" ? "white" : "gray.600"
        }
      },
      list: {
        boxShadow: "none",
        overflow: "hidden",
        border: "none",
        bgColor: {
          base: props.colorMode === "dark" ? "gray.900" : "white",
          md: props.colorMode === "dark" ? "gray.700" : "white"
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
        _hover: {
          bgColor: props.colorMode === "dark" ? "gray.600" : "gray.100"
        },
        _selected: {
          bgColor: props.colorMode === "dark" ? "gray.600" : "gray.100"
        }
      }
    })
  },
  defaultProps: {
    variant: "default"
  }
});
