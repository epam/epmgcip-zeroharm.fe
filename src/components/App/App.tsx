import React from "react";
import { Route, Routes } from "react-router-dom";
import { Page404, PageHome, PageAbout, PageMap } from "../../pages";

function App() {
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
