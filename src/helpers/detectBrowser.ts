import * as Bowser from "bowser";

export const detectBrowser = () => {
  const browser = Bowser.getParser(window.navigator.userAgent);

  const isFirefox = browser.getBrowserName() === "Firefox";
  const isChrome = browser.getBrowserName() === "Chrome";
  const isSafari = browser.getBrowserName() === "Safari";
  const isWebkitBrowser = isChrome || isSafari;

  return {
    isFirefox,
    isChrome,
    isSafari,
    isWebkitBrowser
  };
};
