import { defineStyleConfig } from "@chakra-ui/react";

export const Modal = defineStyleConfig({
  variants: {
    default: {
      header: {
        width: "initial",
        position: "initial",
        zIndex: "initial",
        borderTopRadius: "lg",
        padding: 7,
      },
      overlay: {
        bgColor: "rgba(37,37,38, 0.9)",
      },
      body: {
        bgColor: "gray.900",
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
            "linear-gradient(90deg, #339944 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #7D5BA6 100%);",
        },
      },
    },
  },
  defaultProps: {
    variant: "default",
  },
});
