import { defineStyleConfig } from "@chakra-ui/react";

export const Modal = defineStyleConfig({
  baseStyle: {
    body: {
      bgColor: "primaryBgColor"
    },
    overlay: {
      bgColor: "feedbackFormColor.overlay"
    }
  },
  variants: {
    default: {
      header: {
        borderTopRadius: {
          base: "0px",
          md: "4px"
        }
      },
      body: {
        borderBottomRadius: {
          base: "0px",
          md: "4px"
        }
      },
      dialog: {
        maxW: {
          base: "375px",
          md: "440px",
          lg: "512px"
        },
        position: "relative",
        padding: "4px",
        _after: {
          content: "''",
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          zIndex: "hide",
          borderRadius: { base: "0px", md: "8px" },
          background: "feedbackFormColor.borderGradient"
        }
      }
    },
    colored: {
      dialog: {
        bgColor: "feedbackFormColor.dialog",
        borderWidth: "4px",
        borderRadius: "8px",
        padding: {
          base: "24px",
          md: "36px"
        },
        margin: "0px 16px"
      },
      header: {
        bgColor: "inherit",
        display: "flex",
        padding: "0px",
        paddingBottom: "10px",
        marginBottom: "10px",
        gap: "20px",
        position: "relative",
        zIndex: "initial"
      },
      body: {
        bgColor: "inherit",
        paddingY: "0px"
      }
    }
  },
  defaultProps: {
    variant: "default"
  }
});
