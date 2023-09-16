import { StyleFunctionProps } from "@chakra-ui/react";

export const styles = {
  global: ({ colorMode }: StyleFunctionProps) => {
    const isDark = colorMode === "dark";

    return {
      html: {
        "--headerHeight": "64px",
        "--headerMobileHeight": "56px",
        "--footerHeight": "77px",
        "--footerMobileMaxHeight": "87px",
        "--footerMargin": "16px",
        "--maxContentWidth": "1440px",
        "--primaryColor": isDark ? "#FFFFFF" : "#0F1832"
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
        bg: isDark ? "gray.900" : "white"
      }
    };
  }
};
