import * as React from "react";
import { Flex, Box } from "@chakra-ui/react";

type LayoutAboutPageType = {
  header: React.ReactNode;
  main: React.ReactNode;
};

const LayoutAboutPage: React.FC<LayoutAboutPageType> = ({ header, main }) => {
  return (
    <>
      <Flex direction="column">
        <Box as="header" p="16px 24px" height="64px">
          {header}
        </Box>
        <Box as="main" flex="1">
          {main}
        </Box>
      </Flex>
    </>
  );
};

export default LayoutAboutPage;
