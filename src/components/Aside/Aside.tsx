import { FC, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Tabs } from "../Tabs/Tabs";
import { LocationSelect } from "../LocationSelect/LocationSelect";

export const Aside: FC = () => {
  const [ isScrollVisible, setIsScrollVisible ] = useState(false);

  return (
    <Flex
      as="aside"
      height="100%"
      maxW={isScrollVisible ? "460px" : "440px"}
      p="0 20px 15px 24px"
      direction="column"
      gap="24px"
    >
      <LocationSelect />

      <Tabs {...{isScrollVisible, setIsScrollVisible}}/>
    </Flex>
  );
};
