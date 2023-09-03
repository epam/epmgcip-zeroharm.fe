import { Flex } from "@chakra-ui/react";
import { Tabs } from "../Tabs/Tabs";
import { LocationSelect } from "../LocationSelect/LocationSelect";

export const Aside = () => {

  return (
    <Flex
      p="0 20px 15px 24px"
      direction="column"
      gap="24px"
      height="calc(100vh - 64px)"
    >
      <LocationSelect />
      <Tabs />
    </Flex>
  );
};
