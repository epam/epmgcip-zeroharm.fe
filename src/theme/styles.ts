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
      px: "24px",
      w: "100%",
      zIndex: "sticky"
    },
    footer: {
      py: "16px",
      height: "76px"
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
