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
    width: "calc(100% - 32px)",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: "100",
    bgColor: "gray.900",
    margin: "16px",
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
          pos="fixed"
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
             <StyledFooter as="footer">{ footer }</StyledFooter>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default LayoutMapPage;
