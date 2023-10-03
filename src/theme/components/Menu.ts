import { defineStyleConfig } from "@chakra-ui/react";

const menuItemBg = {
  bg: "menu.itemBg"
};

export const Menu = defineStyleConfig({
  baseStyle: {
    list: {
      borderWidth: { base: "none", md: "1px" },
      borderStyle: "solid",
      borderColor: "menu.listBorder",
      borderRadius: { base: "0", md: "8px" },
      bg: { base: "menu.listBgBase", md: "menu.listBgMd" }
    },
    item: {
      bg: "transparent",
      _focus: menuItemBg,
      _hover: menuItemBg,
      _selected: menuItemBg
    }
  },
  variants: {
    language: {
      button: {
        fontWeight: "bold",
        _hover: {
          color: "menu.languageButtonActive"
        }
      },
      list: {
        boxShadow: "none",
        overflowY: "auto"
      }
    },
    location: {
      button: {
        borderRadius: "8px",
        overflow: "hidden",
        bgColor: "menu.locationButtonBg",
        boxShadow: "primary"
      },
      list: {
        boxShadow: "none",
        overflowY: "auto"
      }
    }
  }
});
