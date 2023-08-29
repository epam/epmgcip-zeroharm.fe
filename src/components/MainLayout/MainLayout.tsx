import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { maxWidthTablet } from "@/theme/foundations/breakpoints";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const MainLayout: FC = () => {
  const { pathname } = useLocation();
  const [isLessThanDesktop] = useMediaQuery(`(max-width: ${maxWidthTablet})`);

  const isMapPage = pathname === "/map";
  const isHomePage = pathname === "/";
  const shouldRenderFooter = !isMapPage || (isMapPage && isLessThanDesktop);
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
      { shouldRenderFooter && (
        <Footer />
      ) }
    </>
  );
};
