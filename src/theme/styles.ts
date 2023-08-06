export const styles = {
  global: {
    "#root": {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      minHeight: "100vh",
    },
    "html, body, header, footer": {
      backgroundColor: "gray.900",
      color: "white",
    },
    "header, footer": {
      height: "64px",
      pos: "fixed",
      w: "100%",
      p: "16px 24px",
      zIndex: "2",
    },
    a: {
      color: "white",
    },
    ".leaflet-container": {
      width: "100%",
      height: "100vh",
    },
  },
};
