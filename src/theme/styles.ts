import { StyleFunctionProps } from "@chakra-ui/react";

export const styles = {
  global: (props: StyleFunctionProps) => ({
    html: {
      "--headerHeight": "64px",
      "--headerMobileHeight": "56px",
      "--footerHeight": "77px",
      "--footerMobileMinHeight": "69px",
      "--footerMobileMaxHeight": "87px",
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
      backgroundColor: "gray.900",
      color: "white"
    },
    "header, footer": {
      w: "100%"
    },
    ".bg-colored": {
      bg: props.colorMode === "dark" ? "gray.900" : "white"
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
    ".leaflet-tooltip-left.leaflet-custom-tooltip::before": {
      borderLeftColor: "gray.800"
    },
    ".leaflet-tooltip-right.leaflet-custom-tooltip::before": {
      borderRightColor: "gray.800"
    }
  })
};
