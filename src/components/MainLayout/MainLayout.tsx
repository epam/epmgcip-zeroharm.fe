import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import { useDetectWidth, useDetectPage } from "@Hooks";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { FormModal } from "../FormModal/FormModal";

export const MainLayout: FC = () => {
  const { isMapPage, isAboutPage } = useDetectPage();
  const { isLargerThan1024, isLargerThan600 } = useDetectWidth();

  const shouldRenderFooter = !isMapPage || (isMapPage && !isLargerThan1024);
  const footerVariantAboutPage = isLargerThan600 ? "fixed" : "static";
  const footerVariant = isAboutPage ? footerVariantAboutPage : "static";

  return (
    <>
      <Flex
        direction="column"
        height="100vh"
      >
        <Header />
        <Box
          w="100%"
          pt="64px"
        >
          <Outlet />
        </Box>
        { shouldRenderFooter && (
          <Footer variant={footerVariant} />
        ) }
      </Flex>
      <FormModal />
    </>
  );
};
