import { StyleFunctionProps, defineStyleConfig } from "@chakra-ui/react";

const gradientPseudoStyles = {
  content: "''",
  display: "block",
  position: "absolute",
  width: "8px",
  top: "0",
  bottom: "0",
  border: "2px solid"
};

const buttonDefaultStyles = {
  bg: "white",
  p: "16px",
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
      paddingX: "24px",
      paddingY: "12px",
      height: "initial",
      position: "relative",
      background: "feedbackButtonColor.gradient",
      backgroundPosition: "8px 0, 8px 100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "calc(100% - 8px - 8px) 2px",
      border: "none",
      borderRadius: "8px",
      _before: {
        ...gradientPseudoStyles,
        left: "0",
        borderColor: "feedbackButtonColor.pseudoBefore",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
        borderRightColor: "transparent"
      },
      _after: {
        ...gradientPseudoStyles,
        right: "0",
        borderColor: "feedbackButtonColor.pseudoAfter",
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",
        borderLeftColor: "transparent"
      }
    },
    link: {
      textDecoration: "underline",
      color: "gray.800",
      minWidth: "unset",
      justifyContent: "flex-start",
      fontSize: "inherit",
      lineHeight: "inherit"
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
