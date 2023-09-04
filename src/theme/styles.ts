import { StyleFunctionProps } from "@chakra-ui/react";

export const styles = {
  global: (props: StyleFunctionProps) => ({
    "#root": {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      minHeight: "100vh",

      "--headerHeight": "64px",
      "--footerHeight": "76px",
      "--footerMargin": "16px"
    },
    "html, body, header, footer": {
      backgroundColor: "gray.900",
      color: "white"
    },
    "header, footer": {
      w: "100%"
    },
    footer: {
      minHeight: {
        base: "initial",
        md: "76px"
      }
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
