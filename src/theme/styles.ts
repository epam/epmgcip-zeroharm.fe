import { StyleFunctionProps } from "@chakra-ui/react";

export const styles = {
  global: ({ colorMode }: StyleFunctionProps) => ({
    html: {
      "--headerHeight": "64px",
      "--headerMobileHeight": "56px",
      "--footerMaxHeight": "87px",
      "--footerMargin": "16px",
      "--maxContentWidth": "1440px",
      "--firefoxScrollbarColor": colorMode === "dark" ? "#48494D transparent" : "white transparent"
    },
    "#root": {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      minHeight: "100vh"
    },
    "html, body, header, footer": {
      backgroundColor: "primaryBgColor",
      color: "primaryColor"
    },
    "header, footer": {
      w: "100%"
    },
    ".leaflet-custom-tooltip": {
      w: { base: "218px", lg: "292px" },
      h: "auto",
      bg: "tooltip.primaryBg",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "tooltip.primaryBorder",
      opacity: "1 !important",
      boxShadow: "none",
      color: "white",
      p: "16px",
      borderRadius: "8px",
      fontSize: "small",
      lineHeight: "small",
      whiteSpace: "normal"
    },
    ".leaflet-tooltip-right.leaflet-custom-tooltip::before": {
      borderRightColor: "tooltip.primaryBg"
    },
    ".leaflet-tooltip-top.leaflet-custom-tooltip::before": {
      borderTopColor: "tooltip.primaryBg"
    }
  })
};
