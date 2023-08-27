import { FC, ReactNode } from "react";
import { Flex, Box, Divider } from "@chakra-ui/react";

type LayoutHomePageType = {
  header: ReactNode;
  aside: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

export const LayoutHomePage: FC<LayoutHomePageType> = ({
  header,
  aside,
  main,
  footer
}) => {
  return (
    <Flex direction="column" h="100vh">
      <Box
        as="header"
        top="0"
        pos="fixed"
      >
        { header }
      </Box>
      <Flex
        maxWidth="1280"
        m="auto"
        w="100%"
       >
        <Box
          as="aside"
          flex="1"
        >
          { aside }
        </Box>
        <Box
          as="main"
          flex="1"
        >
          { main }
        </Box>
      </Flex>
      <Box
        as="footer"
        bottom="0"
        pos="fixed"
      >
        <Divider variant="positioned" />
        { footer }
      </Box>
    </Flex>
  );
};
