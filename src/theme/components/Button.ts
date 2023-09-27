import { defineStyleConfig } from "@chakra-ui/react";

const gradientPseudoStyles = {
  content: "''",
  display: "block",
  position: "absolute",
  width: "8px",
  top: "0",
  bottom: "0",
  border: "2px solid"
};

export const Button = defineStyleConfig({
  variants: {
    default: {
      bg: "primaryColor",
      p: "16px",
      color: "primaryButton.text",
      borderRadius: "8px",
      _hover: {
        bg: "primaryButton.hoverBg"
      },
      _active: {
        bg: "primaryButton.activeBg"
      },
      _disabled: {
        bg: "primaryButton.disabledBg",
        color: "primaryButton.disabledText",
        pointerEvents: "none"
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
    iconButton: {
      minW: "none",
      minH: "none",
      bg: "transparent",
      _hover: { bg: "transparent" },
      color: "primaryColor"
    }
  },
  defaultProps: {
    variant: "default"
  }
});
