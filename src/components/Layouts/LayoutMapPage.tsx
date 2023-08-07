import { FC, ReactNode } from "react";
import { Flex, Box } from "@chakra-ui/react";

type LayoutMapPageType = {
  header: ReactNode;
  aside: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

const LayoutMapPage: FC<LayoutMapPageType> = ({
  header,
  aside,
  main,
  footer
}) => {
  return (
    <>
      <Flex direction="column">
        <Box as="header" top="0">
          { header }
        </Box>
        <Flex pt="64px" >
          <Box as="aside" flex="1 0 440px">
            { aside }
          </Box>
          <Box as="main" flex="1 0 calc(100% - 440px)">
            { main }
          </Box>
        </Flex>
        <Box as="footer" pos="initial" >
          { footer }
        </Box>
      </Flex>
    </>
  );
};

export default LayoutMapPage;
