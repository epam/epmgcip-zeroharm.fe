import { Navigation, LayoutHomePage, Footer } from "@Components";

const Page404 = () => {
  return (
    <LayoutHomePage
      header={<Navigation />}
      aside={<h1>404</h1>}
      main={<h2>page not found</h2>}
      footer={<Footer />}
    />
  );
};

export default Page404;
