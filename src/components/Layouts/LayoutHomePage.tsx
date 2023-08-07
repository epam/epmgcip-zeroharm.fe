import { FC, ReactNode } from "react";
import { Flex, Box, Divider} from "@chakra-ui/react";

type LayoutHomePageType = {
  header: ReactNode;
  aside: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

const LayoutHomePage: FC<LayoutHomePageType> = ({
  header,
  aside,
  main,
  footer
}) => {
  return (
    <Flex direction="column">
      <Box as="header" top="0">
        { header }
      </Box>
      <Flex
        maxWidth="1280"
        m="auto"
        w="100%"
        pt="64px"
      >
        <Box as="aside" flex="1">
          { aside }
        </Box>
        <Box as="main" flex="1">
          { main }
        </Box>
      </Flex>
      <Box as="footer" bottom="0">
        <Divider variant="positioned" />
        { footer }
      </Box>
    </Flex>
  );
};

export default LayoutHomePage;
