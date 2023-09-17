import { StyleFunctionProps } from "@chakra-ui/react";

export const styles = {
  global: ({ colorMode }: StyleFunctionProps) => ({
    html: {
      "--headerHeight": "64px",
      "--headerMobileHeight": "56px",
      "--footerHeight": "77px",
      "--footerMobileMinHeight": "69px",
      "--footerMobileMaxHeight": "87px",
      "--footerMargin": "16px",
      "--maxContentWidth": "1440px",
      "--linkHoverAndActiveColor": colorMode === "dark" ? "#FFA01C" : "#3060E5"
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
      bg: colorMode === "dark" ? "gray.900" : "white"
    }
  })
};
