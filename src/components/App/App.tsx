import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Page404, PageHome, PageAbout, PageMap } from "@/pages";
import i18n from "i18next";
import "@/i18n/i18n";
import { useDataStore } from "@/store/useDataStore";

function App() {
  const { language } = useDataStore();
  useEffect(() => {
    i18n.changeLanguage(language).then();
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

export default App;
