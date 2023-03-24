import * as React from "react";
import Navigation from "@Components/Navigation/Navigation";
import Greetings from "@Components/Greetings/Greetings";
import LayoutHomePage from "@Components/Layouts/LayoutHomePage";
import Selector from "@Components/Selector/Selector";

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
