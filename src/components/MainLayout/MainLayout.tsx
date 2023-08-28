import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";

export const MainLayout: FC = () => {
  const { pathname } = useLocation();

  const isMapPage = pathname === "/map";
  const containerStyleWithAside = isMapPage ? "initial" : "77px";
  const isRenderFooter = !isMapPage;

  return (
    <>
      <Navigation />
      <Box
        as="main"
        w="100%"
        pt="64px"
        pb={containerStyleWithAside}
      >
        <Outlet />
      </Box>
      { isRenderFooter && (
        <Footer />
      ) }
    </>
  );
};
