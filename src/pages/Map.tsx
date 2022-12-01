import * as React from "react";
import LayoutMapPage from "../components/Layouts/LayoutMapPage";
import Navigation from "../components/Navigation/Navigation";
import Aside from "../components/Aside/Aside";
import Map from "../components/Map/Map";

const PageMap = () => {
  return (
    <LayoutMapPage
      header={<Navigation />}
      aside={<Aside />}
      main={<Map />}
    />
  );
};

export default PageMap;
