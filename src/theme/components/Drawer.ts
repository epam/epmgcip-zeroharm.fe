import { defineStyleConfig } from "@chakra-ui/react";

export const Drawer = defineStyleConfig({
  variants: {
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
  }
});
