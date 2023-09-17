import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { LocationSelect } from "../LocationSelect/LocationSelect";

export const AsideLocationMenu: FC = () => {

  return (
    <Box
      w={{ base: "343px", md: "100%" }}
      h="44px"
      px={{ base: "0", md: "16px", lg: "24px" }}
      pr={{ lg: "20px" }}
    >
      <LocationSelect />
    </Box>
  );
};
