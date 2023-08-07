import { FC, ReactNode } from "react";
import { Flex, Box, chakra } from "@chakra-ui/react";

type LayoutMapPageType = {
  header: ReactNode;
  aside: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

const StyledFooter = chakra(Box, {
  baseStyle: {
    position: "sticky",
    bottom: 4,
    left: 0,
    zIndex: "100",
    bgColor: "gray.900",
    margin: 4,
    paddingX: 6,
    paddingY: 5,
    borderRadius: 8
  }
});

const LayoutMapPage: FC<LayoutMapPageType> = ({
  header,
  aside,
  main,
  footer
}) => {
  return (
    <>
      <Flex direction="column">
        <Box
          as="header"
          top="0"
        >
          { header }
        </Box>
        <Flex pt="64px">
          <Box
            as="aside"
            flex="1 0 440px"
          >
            { aside }
          </Box>
          <Box
            as="main"
            flex="1 0 calc(100% - 440px)"
            pos="relative"
            mx="auto"
          >
            { main }
            <StyledFooter>{ footer }</StyledFooter>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default LayoutMapPage;
