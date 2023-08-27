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
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: "sticky",
    bgColor: "gray.900",
    borderRadius: 8
  }
});

export const LayoutMapPage: FC<LayoutMapPageType> = ({
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
            sx={{"--footer-margin": "16px"}}
          >
            { main }
             <StyledFooter as="footer" m="var(--footer-margin)"
                w={`calc(100% - ${"var(--footer-margin)"} - ${"var(--footer-margin)"})`} >{ footer }</StyledFooter>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
