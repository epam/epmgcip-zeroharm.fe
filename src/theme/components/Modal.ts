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
        borderTopRadius: "lg",
        paddingX: 5,
        paddingTop: 5,
        paddingBottom: 4
      },
      body: {
        paddingBottom: 6
      },
      dialog: {
        maxW: {
          base: "367px",
          md: "440px",
          lg: "512px"
        },
        position: "relative",
        borderRadius: "8px",
        _after: {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: "hide",
          margin: "-4px",
          borderRadius: { base: 0, md: "inherit" },
          background: "feedbackFormColor.borderGradient"
        }
      }
    },
    colored: {
      dialog: {
        bgColor: "feedbackFormColor.dialog",
        borderWidth: 4,
        borderRadius: "8px",
        padding: 9
      },
      header: {
        bgColor: "inherit",
        display: "flex",
        padding: 0,
        paddingBottom: "10px",
        marginBottom: "10px",
        gap: 5,
        position: "relative",
        zIndex: "initial"
      },
      body: {
        bgColor: "inherit",
        paddingY: 0
      }
    }
  },
  defaultProps: {
    variant: "default"
  }
});
