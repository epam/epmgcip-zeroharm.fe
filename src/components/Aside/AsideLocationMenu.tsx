import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { LocationMenu } from "../LocationMenu/LocationMenu";

export const AsideLocationMenu: FC = () => {

  return (
    <Box
      w={{ base: "343px", md: "100%" }}
      px={{ base: "0", md: "16px", lg: "24px" }}
      pr={{ lg: "20px" }}
    >
      <LocationMenu />
    </Box>
  );
};
