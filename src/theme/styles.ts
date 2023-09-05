import { StyleFunctionProps } from "@chakra-ui/react";

export const styles = {
  global: (props: StyleFunctionProps) => ({
    html: {
      "--headerHeight": "64px",
      "--headerMobileHeight": "56px",
      "--footerHeight": "77px",
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
    a: {
      color: "white"
    },
    ".leaflet-container": {
      width: "100%",
      height: "100vh"
    },
    ".bg-colored": {
      bg: props.colorMode === "dark" ? "gray.900" : "white"
    }
  })
};
