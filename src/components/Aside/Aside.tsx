import { FC, useState } from "react";
import { Flex } from "@chakra-ui/react";
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
      maxW={{
        base: "375px",
        md: `calc(359px + ${offset})`,
        lg: `calc(440px + ${offset})`
      }}
      p={{
        base: "8px 16px 16px",
        md: "16px 12px 16px 16px",
        lg: "16px 20px 16px 24px"
      }}
      direction="column"
      gap="16px"
    >
      <LocationSelect />

      <Tabs {...{isScrollVisible, setIsScrollVisible}}/>
    </Flex>
  );
};
