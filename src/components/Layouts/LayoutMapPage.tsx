import * as React from "react";
import { Flex, Box } from "@chakra-ui/react";

type LayoutMapPageType = {
  header: React.ReactNode;
  aside: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
};

const LayoutMapPage: React.FC<LayoutMapPageType> = ({
  header,
  aside,
  main,
  footer,
}) => {
  return (
    <>
      <Flex direction="column">
        <Box as="header" p="16px 24px" height="64px">
          {header}
        </Box>
        <Flex>
          <Box as="aside" flex="1 0 440px">
            {aside}
          </Box>
          <Box as="main" flex="1 0 calc(100% - 440px)">
            {main}
          </Box>
        </Flex>
        <Box as="footer" pos="initial" >
          {footer}
        </Box>
      </Flex>
    </>
  );
};

export default LayoutMapPage;
