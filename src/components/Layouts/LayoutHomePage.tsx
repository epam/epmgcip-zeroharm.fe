import * as React from "react";
import { Flex, Box } from "@chakra-ui/react";

type LayoutHomePageType = {
  header: React.ReactNode;
  aside: React.ReactNode;
  main: React.ReactNode;
};

const LayoutHomePage: React.FC<LayoutHomePageType> = ({
  header,
  aside,
  main,
}) => {
  return (
    <Flex direction="column">
      <Box as="header" p="16px 24px" height="64px">
        {header}
      </Box>
      <Flex maxWidth="1280" m="auto" w="100%" pt="64px">
        <Box as="aside" flex="1">
          {aside}
        </Box>
        <Box as="main" flex="1">
          {main}
        </Box>
      </Flex>
    </Flex>
  );
};

export default LayoutHomePage;
