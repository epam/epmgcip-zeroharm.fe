import * as React from "react";
import LayoutHomePage from "../components/Layouts/LayoutHomePage";
import Navigation from "../components/Navigation/Navigation";

const Page404 = () => {
  return (
    <LayoutHomePage
      header={<Navigation />}
      aside={<h1>404</h1>}
      main={<h2>page not found</h2>}
    />
  );
};

export default Page404;
