import { FC, useState } from "react";
import { Box, VStack } from "@chakra-ui/react";
import { Tabs } from "../Tabs/Tabs";
import { LocationSelect } from "../LocationSelect/LocationSelect";

export const Aside: FC = () => {
  const [ isScrollVisible, setIsScrollVisible ] = useState(false);

  const offset = isScrollVisible ? "20px" : "0px";

  return (
    <VStack
      as="aside"
      height="100%"
      maxW={{
        base: "599px",
        md: "359px",
        lg: `calc(440px + ${offset})`
      }}
      w="100%"
    >
      <Box
        bgColor="gray.900"
        w="100%"
        pos={{ base: "fixed", md: "initial" }}
        zIndex={{ base: "1099", md: "initial" }}
      >
        <Box
          m={{
            base: "8px auto 16px",
            md: "16px",
            lg: "16px 20px 16px 24px"
          }}
          h="44px"
          w={{ base: "343px", md: "initial" }}
        >
          <LocationSelect />
        </Box>
      </Box>
      <Tabs
        isScrollVisible={isScrollVisible}
        setIsScrollVisible={setIsScrollVisible}
      />
    </VStack>
  );
};

