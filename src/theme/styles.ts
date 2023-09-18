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
      backgroundColor: props.colorMode === "dark" ? "gray.900" : "blue.50",
      color: props.colorMode === "dark" ? "white" : "black"
    },
    "header, footer": {
      w: "100%"
    },
    ".bg-colored": {
      bg: props.colorMode === "dark" ? "gray.900" : "white"
    }
  })
};
