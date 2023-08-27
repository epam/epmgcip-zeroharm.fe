import { Navigation, Greetings, LayoutHomePage, Selector, Footer } from "@Components";

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
