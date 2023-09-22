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
    }
  })
};
