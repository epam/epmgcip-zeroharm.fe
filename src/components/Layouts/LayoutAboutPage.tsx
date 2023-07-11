import * as React from "react";
import { Flex, Box } from "@chakra-ui/react";

type LayoutAboutPageType = {
  header: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
};

const LayoutAboutPage: React.FC<LayoutAboutPageType> = ({
  header,
  main,
  footer,
}) => {
  return (
    <>
      <Flex direction="column">
        <Box as="header" p="16px 24px" height="64px">
          {header}
        </Box>
        <Box as="main" flex="1" pb="64px">
          {main}
        </Box>
        <Box as="footer" bottom="0">
          {footer}
        </Box>
      </Flex>
    </>
  );
};

export default LayoutAboutPage;
