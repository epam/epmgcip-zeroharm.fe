import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { Map } from "../Map/Map";
import { Footer } from "../Footer/Footer";

export const MobileMapAndFooter: FC = () => {
  return (
    <>
      <Box
        as="main"
        height="400px"
        w="100vw"
        mt="16px"
      >
        <Map />
      </Box>
      <Footer />
    </>
  );
};
