export const styles = {
  global: {
    html: {
      "--headerHeight": "64px",
      "--headerMobileHeight": "56px",
      "--footerMaxHeight": "87px",
      "--footerMargin": "16px",
      "--maxContentWidth": "1440px"
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
      bg: "gray.800",
      border: "none",
      color: "white",
      p: "16px",
      borderRadius: "8px",
      fontSize: "small",
      lineHeight: "small",
      whiteSpace: "normal"
    },
    ".leaflet-tooltip-right.leaflet-custom-tooltip::before": {
      borderRightColor: "gray.800"
    },
    ".leaflet-tooltip-top.leaflet-custom-tooltip::before": {
      borderTopColor: "gray.800"
    }
  }
};
