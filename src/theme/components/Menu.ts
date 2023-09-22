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
        borderWidth: { base: "none", md: "1px" },
        borderStyle: "solid",
        borderColor: "languageMenu.listBorder",
        borderRadius: { base: "0", md: "8px" },
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
