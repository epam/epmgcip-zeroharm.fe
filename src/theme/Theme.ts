import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "#root": {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "100vh",
      },
      "html, body": {
        backgroundColor: "#252526",
        color: "white",
      },
      a: {
        color: "white",
      },
      ".leaflet-container": {
        width: "100%",
        height: "100vh",
      },
    },
  },
  colors: {
    violet: { 500: "#7D5BA6", 50: "#F2EFF6" },
    ruby: { 500: "#C53446", 50: "#F9EBEC" },
    red: { 500: "#E6484E", 50: "#FDEDED" },
    orange: { 500: "#FC7753", 50: "#FFF1EE" },
    yellow: { 500: "#FFA01C", 50: "#FFF6E8" },
    green: { 500: "#339944", 50: "#F6FCF7" },
    gray: {
      950: "#191A1B",
      900: "#252526",
      800: "#303133",
      700: "#48494D",
      600: "#606266",
      500: "#787A80",
      400: "#909399",
      300: "#A8ABB2",
      200: "#C0C4CC",
      100: "#D8DCE5",
      0: "#FFFFFF",
    },
    blue: { 500: "#3060E5", 50: "#EAEFFC" },
  },
  fontSizes: {
    harm: {
      h1: "44px",
    },
  },
});
