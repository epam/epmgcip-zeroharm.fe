export const semanticTokens = {
  colors: {
    primaryColor: { default: "white", _light: "navyBlue.900" },
    primaryBgColor: { default: "gray.900", _light: "navyBlue.100" },
    secondaryColor: { default: "gray.200", _light: "navyBlue.600" },
    secondaryBgColor: { default: "gray.900", _light: "white" },
    linkHoverAndActiveColor: { default: "yellow.500", _light: "blue.500" },
    primaryButton: {
      text: { default: "gray.950", _light: "white" },
      hoverBg: { default: "gray.100", _light: "navyBlue.700" },
      activeBg: { default: "gray.200", _light: "navyBlue.600" },
      disabledBg: { default: "gray.700", _light: "navyBlue.200" },
      disabledText: { default: "gray.500", _light: "white" }
    },
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
    feedbackFormColor: {
      overlay: { default: "rgba(37, 37, 38, 0.90)", _light: "whiteAlpha.900" },
      dialog: { default: "gray.800", _light: "green.50-light"},
      divider: { default: "gray.700", _light: "navyBlue.500" },
      border: { default: "gray.700", _light: "navyBlue.300" },
      borderFocus: { default: "white", _light: "navyBlue.300" },
      borderGradient: {
        default: "linear-gradient(90deg, #339944 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #7D5BA6 100%)",
        _light: "blue.500"
      },
      inputBg: { default: "gray.700", _light: "white" },
      text: { default: "white", _light: "navyBlue.300" },
      placeholder: { default: "gray.300", _light: "navyBlue.300" },
      hintIcon: { default: "gray.400", _light: "navyBlue.300" },
      tooltipBg: { default: "white", _light: "navyBlue.600" },
      tooltipText: { default: "gray.900", _light: "white" },
      tooltipBorder: { default: "gray.100", _light: "navyBlue.400" }
    },
    borderColor: { default: "gray.700", _light: "navyBlue.200" },
    borderGradientColor: {
      default: "linear-gradient(90deg, #339944 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #7D5BA6 100%)",
      _light: "linear-gradient(90deg, #61C554 0%, #FFA01C 20%, #FC7753 40%, #F1484F 60%, #E1263D 80%, #9768CF 100%)"
    },
    themeTogglerColor: {
      body: { default: "whiteAlpha.400", _light: "navyBlue.200" },
      iconMoon: { default: "white", _light: "navyBlue.200" },
      iconSun: { default: "whiteAlpha.400", _light: "navyBlue.900" }
    },
    languageMenu: {
      button: { default: "gray.100", _light: "navyBlue.600" },
      listBgBase: { default: "gray.900", _light: "white" },
      listBgMd: { default: "gray.700", _light: "white" },
      itemBg: { default: "gray.600", _light: "navyBlue.100" },
      listBorder: { default: "gray.600", _light: "navyBlue.200" }
    }
  }
};
