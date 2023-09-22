import { defineStyleConfig } from "@chakra-ui/react";

export const Modal = defineStyleConfig({
  baseStyle: {
    header: {
      width: "initial",
      position: "initial",
      zIndex: "initial"
    },
    dialog: {
      bgColor: "gray.900"
    },
    body: {
      bgColor: "gray.900"
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
      overlay: {
        bgColor: "rgba(37,37,38, 0.9)"
      },
      body: {
        paddingBottom: 6
      },
      dialog: {
        position: "relative",
        _after: {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: "hide",
          margin: "-4px",
          borderRadius: "inherit",
          backgroundImage:
            "linear-gradient(90deg, #339944 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #7D5BA6 100%);"
        }
      }
    },
    colored: {
      dialog: {
        borderWidth: 4,
        padding: 9
      },
      header: {
        display: "flex",
        padding: 0,
        paddingBottom: "10px",
        marginBottom: "10px",
        gap: 5,
        position: "relative",
        zIndex: "initial"
      },
      body: {
        paddingY: 0
      }
    },
    drawer: {
      dialog: {
        bgColor: "primaryBgColor",
        boxShadow: "none"
      },
      header: {
        bgColor: "transparent"
      },
      body: {
        bgColor: "transparent"
      },
      footer: {
        bgColor: "transparent"
      }
    }
  },
  defaultProps: {
    variant: "default"
  }
});
