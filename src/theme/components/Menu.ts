import { defineStyleConfig } from "@chakra-ui/react";

const menuItemBg = {
  bg: "languageMenu.itemBg"
};

export const Menu = defineStyleConfig({
  variants: {
    default: {
      button: {
        fontWeight: "bold",
        _hover: {
          color: "languageMenu.button"
        }
      },
      list: {
        boxShadow: "none",
        overflow: "hidden",
        border: "none",
        bg: { base: "languageMenu.listBgBase", md: "languageMenu.listBgMd" }
      },
      item: {
        bg: "transparent",
        _focus: menuItemBg,
        _hover: menuItemBg,
        _selected: menuItemBg
      }
    }
  },
  defaultProps: {
    variant: "default"
  }
});
