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
    "header, footer": {
      w: "100%",
      zIndex: "sticky"
    },
    "header": {
      height: "64px",
      p: "16px 24px"
    },
    footer: {
      minHeight: {
        base: "none",
        md: "76px"
      },
      p: {
        base: "16px",
        lg: "16px 24px"
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
