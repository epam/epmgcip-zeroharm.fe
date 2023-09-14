import { StyleFunctionProps, defineStyleConfig } from "@chakra-ui/react";

const buttonDefaultStyles = {
  bg: "white",
  p: { base: "13px 24px", lg: "16px 24px"},
  color: "gray.950",
  borderRadius: "8px"
};

const buttonDefaultStyles__hover = {
  bg: "gray.200"
};

const buttonDefaultStyles__active = {
  bg: "gray.200"
};

const buttonDefaultStyles__disabled = {
  bg: "gray.700",
  color: "gray.500"
};

export const Button = defineStyleConfig({
  variants: {
    default: {
      ...buttonDefaultStyles,
      _hover: { ...buttonDefaultStyles__hover },
      _active: { ...buttonDefaultStyles__active },
      _disabled: {
        ...buttonDefaultStyles__disabled,
        _hover: {
          ...buttonDefaultStyles__disabled
        }
      }
    },
    gradient: {
      paddingX: 6,
      paddingY: 5,
      border: "2px solid transparent",
      borderRadius: "8px",
      backgroundImage: "linear-gradient(#252526, #252526), linear-gradient(90deg, #339944 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #7D5BA6 100%)",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box"
    },
    link: {
      textDecoration: "underline",
      color: "gray.800",
      minWidth: "unset",
      justifyContent: "flex-start"
    },
    iconButton: ({colorMode}: StyleFunctionProps) => ({
      minW: "none",
      minH: "none",
      bg: "transparent",
      _hover: { bg: "transparent" },
      color: colorMode === "dark" ? "white" : "gray.900"
    })
  },
  defaultProps: {
    variant: "default"
  }
});
