export const styles = {
  global: {
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
    "header": {
      zIndex: "sticky",
      w: "100%",
      height: "64px",
      p: "16px 24px"
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
    }
  }
};
