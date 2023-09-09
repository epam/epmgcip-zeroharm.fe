import { FC, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Tabs } from "../Tabs/Tabs";
import { LocationSelect } from "../LocationSelect/LocationSelect";

export const Aside: FC = () => {
  const [ isScrollVisible, setIsScrollVisible ] = useState(false);

  const offset = isScrollVisible ? "20px" : "0px";

  return (
    <Flex
      as="aside"
      height={{
        base: "auto",
        md: "100%"
      }}
      w={{
        base: "375px",
        md: "359px",
        lg: `calc(440px + ${offset})`
      }}
      p={{
        base: "8px 16px 16px",
        md: "16px 0 16px 16px",
        lg: "16px 0 16px 24px"
      }}
      direction="column"
      gap="16px"
    >
      <Box
        display={{ base: "block", md: "none" }}
        bgColor="gray.900"
        h="110px"
        w="100vw"
        pos="fixed"
        zIndex="1099"
        transform="translate(0, -8px)"
      />
      <Box
        mr={{ md: "16px", lg: "20px" }}
        pos={{ base: "fixed", md: "initial" }}
        w={{ base: "343px", md: "initial" }}
        zIndex={{ base: "1099", md: "initial" }}
      >
        <LocationSelect />
      </Box>
      <Tabs
        isScrollVisible={isScrollVisible}
        setIsScrollVisible={setIsScrollVisible}
      />
    </Flex>
  );
};

