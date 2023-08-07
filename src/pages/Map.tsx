import LayoutMapPage from "@Components/Layouts/LayoutMapPage";
import Navigation from "@Components/Navigation/Navigation";
import Aside from "@Components/Aside/Aside";
import Footer from "@Components/Footer/Footer";
import Map from "@Components/Map/Map";

const PageMap = () => {
  return (
    <LayoutMapPage
      header={<Navigation />}
      aside={<Aside />}
      main={<Map />}
      footer={<Footer />}
    />
  );
};

export default PageMap;
