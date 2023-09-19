export const styles = {
  global: {
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
      backgroundColor: "gray.900",
      color: "white"
    },
    "header, footer": {
      w: "100%"
    }
  }
};
