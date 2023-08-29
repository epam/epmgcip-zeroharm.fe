import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const MainLayout: FC = () => {
  const { pathname } = useLocation();

  const isMapPage = pathname === "/map";
  const isHomePage = pathname === "/";
  const isRenderFooter = !isMapPage;
  const containerStyleWithAside = {
    pb: isMapPage ? "initial" : "77px",
    h: isHomePage ? "100vh" : "initial"
  };

  return (
    <>
      <Header />
      <Box
        w="100%"
        pt="64px"
        {...containerStyleWithAside}
      >
        <Outlet />
      </Box>
      { isRenderFooter && (
        <Footer />
      ) }
    </>
  );
};
