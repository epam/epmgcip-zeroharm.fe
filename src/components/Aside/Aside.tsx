import { Flex } from "@chakra-ui/react";
import { Tabs } from "../Tabs/Tabs";
import { LocationSelect } from "../LocationSelect/LocationSelect";

export const Aside = () => {

  return (
    <Flex
      p="0 20px 15px 24px"
      direction="column"
      gap="24px"
      height="100%"
    >
      <LocationSelect />
      <Tabs />
    </Flex>
  );
};
