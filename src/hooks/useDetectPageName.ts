import { useDetectPage } from "./useDetectPage";

export const useDetectPageName = () => {
  const { isMainPage, isMapPage, isAboutPage } = useDetectPage();

  if (isMainPage) {
    return "Home";
  }
  if (isMapPage) {
    return "Map";
  }
  if (isAboutPage) {
    return "About";
  }
};
