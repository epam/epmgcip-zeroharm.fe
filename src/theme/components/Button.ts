import { StyleFunctionProps, defineStyleConfig } from "@chakra-ui/react";

const gradientColorDark = `
linear-gradient(90deg, #339944 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #7D5BA6 100%),
linear-gradient(90deg, #339944 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #7D5BA6 100%)
`;

const gradientColorLight = `
linear-gradient(90deg, #61C554 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #9768CF 100%),
linear-gradient(90deg, #61C554 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #9768CF 100%)
`;

const gradientPseudoStyles = {
  content: "''",
  display: "block",
  position: "absolute",
  width: "8px",
  top: "0",
  bottom: "0"
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
    gradient: ({ colorMode }: StyleFunctionProps) => ({
      paddingX: "24px",
      paddingY: "12px",
      height: "initial",
      position: "relative",
      background: colorMode === "dark" ? gradientColorDark : gradientColorLight,
      backgroundPosition: "8px 0, 8px 100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "calc(100% - 8px - 8px) 2px",
      border: "none",
      borderRadius: "8px",
      _before: {
        ...gradientPseudoStyles,
        left: "0",
        border: colorMode === "dark" ? "2px solid #339944" : "2px solid #61C554",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
        borderRightColor: "transparent"
      },
      _after: {
        ...gradientPseudoStyles,
        right: "0",
        border: colorMode === "dark" ? "2px solid #7D5BA6" : "2px solid #9768CF",
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",
        borderLeftColor: "transparent"
      }
    }),
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
