import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { Map } from "../Map/Map";
import { Footer } from "../Footer/Footer";
import { useDetectWidth } from "../../hooks";

export const MainMapAndFooter: FC = () => {
  const { isLargerThan1024 } = useDetectWidth();

  return (
    <Box
      as="main"
      height="100%"
      w= "auto"
      flex="1"
      pos="relative"
    >
      <Map />
      { isLargerThan1024 && <Footer variant="card" /> }
    </Box>
  );
};
