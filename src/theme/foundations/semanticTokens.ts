export const semanticTokens = {
  colors: {
    light: "white",
    dark: "navyBlue.900",
    primaryColor: { default: "white", _light: "navyBlue.900" },
    primaryBgColor: { default: "gray.900", _light: "navyBlue.100" },
    secondaryColor: { default: "gray.200", _light: "navyBlue.600" },
    secondaryBgColor: { default: "gray.900", _light: "white" },
    linkHoverAndActiveColor: { default: "yellow.500", _light: "blue.500" },
    feedbackButtonColor: {
      gradient: {
        default: `
          linear-gradient(90deg, #339944 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #7D5BA6 100%),
          linear-gradient(90deg, #339944 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #7D5BA6 100%)
        `,
        _light: `
          linear-gradient(90deg, #61C554 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #9768CF 100%),
          linear-gradient(90deg, #61C554 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #9768CF 100%)
        `
      },
      pseudoBefore: { default: "green.500", _light: "green.500-light" },
      pseudoAfter: { default: "violet.500", _light: "violet.500-light" }
    },
    feedbackButtonMobileColor: {
      default: "linear-gradient(129deg, #394 -18.95%, #FFA01C 22.54%, #FC7753 64.03%, #E6484E 105.52%, #C53446 147%, #7D5BA6 188.49%)",
      _light: "linear-gradient(314deg, #3060E5 20.59%, #7CD0FF 115.69%)"
    },
    borderColor: { default: "gray.700", _light: "navyBlue.200" },
    themeTogglerColor: {
      body: { default: "whiteAlpha.400", _light: "navyBlue.200" },
      iconMoon: { default: "white", _light: "navyBlue.200" },
      iconSun: { default: "whiteAlpha.400", _light: "navyBlue.900" }
    },
    languageMenu: {
      button: { default: "gray.100", _light: "navyBlue.600" },
      listBgBase: { default: "gray.900", _light: "white" },
      listBgMd: { default: "gray.700", _light: "white" },
      itemBg: { default: "gray.600", _light: "navyBlue.100" }
    },
    parameter: {
      primary: { default: "gray.800", _light: "white" },
      secondary: { default: "gray.400", _light: "navyBlue.400" },
      icon: { default: "gray.400", _light: "navyBlue.200" },
      progressBg: { default: "gray.700", _light: "navyBlue.150" },
      groupColor: {
        green: { default: "green.500", _light: "green.500-light" },
        yellow: "yellow.500",
        orange: "orange.500",
        red: "red.500",
        ruby: "ruby.500",
        violet: { default: "violet.500", _light: "violet.500-light" },
        blue: "blue.500"
      },
      groupColorAdditional: {
        green: { default: "green.50", _light: "white" },
        yellow: { default: "yellow.50", _light: "white" },
        orange: { default: "orange.50", _light: "white" },
        red: { default: "red.50", _light: "white" },
        ruby: { default: "ruby.50", _light: "white" },
        violet: { default: "violet.50", _light: "white" },
        blue: { default: "blue.50", _light: "white" }
      },
      tooltipBg: { default: "gray.700", _light: "navyBlue.600" },
      tooltipBorder: { default: "gray.600", _light: "navyBlue.400" }
    },
    scrollBar: {
      thumb: { default: "gray.700", _light: "white" },
      trackLg: { default: "gray.800", _light: "navyBlue.200" }
    }
  }
};
