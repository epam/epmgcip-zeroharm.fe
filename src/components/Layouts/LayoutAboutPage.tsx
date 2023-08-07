import { FC, ReactNode } from "react";
import { Flex, Box, Divider } from "@chakra-ui/react";

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
          { header }
        </Box>
        <Box
          as="main"
          flex="1"
          pt="64px"
          pb="77px"
        >
          { main }
        </Box>
        <Box as="footer" bottom="0">
        <Divider variant="positioned" />
          { footer }
        </Box>
      </Flex>
    </>
  );
};

export default LayoutAboutPage;
