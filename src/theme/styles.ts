export const styles = {
  global: {
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
      w: "100%",
      p: "16px 24px",
      zIndex: "sticky"
    },
    header: {
      height: "64px"
    },
    footer: {
      p: {
        base: "16px",
        md: "16px"
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
