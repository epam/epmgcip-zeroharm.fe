import { Navigation, LayoutMapPage, Aside, Map, Footer } from "@Components";

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
