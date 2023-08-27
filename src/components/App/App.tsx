import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { changeLanguage } from "i18next";
import { Page404, PageHome, PageAbout, PageMap } from "@Pages";
import { useDataStore } from "@Store/useDataStore";
import { useFetch } from "@Hooks";
import "@i18n/i18n";

export function App() {
  const { language, setParameters, setAirComponents } = useDataStore();

  useFetch("/v1/pollutions?station_id=1", (data) => {
    if (data) {
      const { parameters, airComponents } = data;

      setParameters(parameters);
      setAirComponents(airComponents);
    }
  });

  useEffect(() => {
    changeLanguage(language).then();
  }, [language]);

  return (
    <>
      <Routes>
        <Route index element={<PageHome />} />
        <Route path="about" element={<PageAbout />} />
        <Route path="map" element={<PageMap />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}
