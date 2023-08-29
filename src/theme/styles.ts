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
      zIndex: "sticky"
    },
    "header": {
      height: "64px",
      p: "16px 24px"
    },
    footer: {
      height: "76px",
      display: "flex",
      alignItems: "center",
      p: {
        base: "16px 16px",
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
