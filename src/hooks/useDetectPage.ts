import { useLocation } from "react-router-dom";
import { routes } from "@Constants";

export const useDetectPage = () => {
  const { pathname } = useLocation();

  const { main, map, about } = routes;

  return {
    isMainPage: main === pathname,
    isMapPage: map === pathname,
    isAboutPage: about === pathname
  };
};
