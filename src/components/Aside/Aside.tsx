import { Flex } from "@chakra-ui/react";
import { Tabs, LocationSelect } from "@Components";

export const Aside = () => {

  return (
    <Flex
      p="0 20px 24px 24px"
      direction="column"
      gap="24px"
      height="calc(100vh - 64px)"
      overflow="hidden"
    >
      <LocationSelect />
      <Tabs />
    </Flex>
  );
};
