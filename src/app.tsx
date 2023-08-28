import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { changeLanguage } from "i18next";
import { Home, MapAndDetails, About, NotFound } from "@Pages";
import { useDataStore } from "@Store/useDataStore";
import { useFetch } from "@Hooks";
import { MainLayout } from "@Components";
import "@i18n/i18n";

export const App = () => {
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
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="map" element={<MapAndDetails />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
