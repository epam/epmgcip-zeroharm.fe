export const styles = {
  global: {
    "#root": {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      minHeight: "100vh",
    },
    "html, body, footer": {
      backgroundColor: "#252526",
      color: "white",
    },
    "footer": {
      height: "64px",
      pos: "fixed",
      w: "100%",
      p: "16px 24px",
      zIndex: "2",
      bottom: "0",
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
