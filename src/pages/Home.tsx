import Navigation from "@Components/Navigation/Navigation";
import Greetings from "@Components/Greetings/Greetings";
import LayoutHomePage from "@Components/Layouts/LayoutHomePage";
import Selector from "@Components/Selector/Selector";
import Footer from "@/components/Footer/Footer";

const PageHome = () => {
  return (
    <LayoutHomePage
      header={<Navigation />}
      aside={<Selector />}
      main={<Greetings />}
      footer={<Footer />}
    />
  );
};

export default PageHome;
