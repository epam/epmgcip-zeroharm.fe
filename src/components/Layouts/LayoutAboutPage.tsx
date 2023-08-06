import { FC, ReactNode } from "react";
import { Flex, Box } from "@chakra-ui/react";

type LayoutAboutPageType = {
  header: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

const LayoutAboutPage: FC<LayoutAboutPageType> = ({
  header,
  main,
  footer
}) => {
  return (
    <>
      <Flex direction="column">
        <Box as="header" top="0">
          {header}
        </Box>
        <Box as="main" flex="1" pt="64px" pb="64px">
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
