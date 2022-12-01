import * as React from "react";
import Navigation from "../components/Navigation/Navigation";
import Greetings from "../components/Greetings/Greetings";
import LayoutHomePage from "../components/Layouts/LayoutHomePage";
import Selector from "../components/Selector/Selector";

const PageHome = () => {
  return (
    <LayoutHomePage
      header={<Navigation />}
      aside={<Selector />}
      main={<Greetings />}
    />
  );
};

export default PageHome;
