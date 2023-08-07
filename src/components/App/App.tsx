import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { changeLanguage } from "i18next";
import { Page404, PageHome, PageAbout, PageMap } from "@/pages";
import { useDataStore } from "@/store/useDataStore";
import { useFetch } from "@/hooks";
import "@/i18n/i18n";

function App() {
  const { language, setParametersValues } = useDataStore();

  useFetch(`${process.env.REACT_APP_ZERO_HARM_URL}/v1/pollutions?station_id=1`, setParametersValues);

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

export default App;
